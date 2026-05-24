import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

type SubLink = { to: string; label: string; desc?: string };
type NavItem =
  | { to: string; label: string; children?: undefined }
  | { label: string; children: SubLink[]; to?: undefined };

const voorWie: SubLink[] = [
  { to: "/voor-wie/adhd-ondernemers", label: "ADHD-ondernemers", desc: "Coaching voor het ADHD-brein." },
  { to: "/voor-wie/autistische-ondernemers", label: "Autistische ondernemers", desc: "Coaching voor het autistische brein." },
  { to: "/voor-wie/audhd-ondernemers", label: "AuDHD-ondernemers", desc: "Voor wie zowel ADHD als autisme heeft." },
  { to: "/voor-wie/laat-ontdekt", label: "Laat ontdekt", desc: "Pas later in je carrière ontdekt of gediagnosticeerd." },
];

const themas: SubLink[] = [
  { to: "/themas/masking", label: "Masking", desc: "Wat het is en wat het je in je bedrijf kost." },
  { to: "/themas/overprikkeling", label: "Overprikkeling", desc: "Waarom je leeg bent na een goed gesprek." },
  { to: "/themas/energie-burnout", label: "Energie en burn-out", desc: "Hoe je het ziet aankomen en wat helpt." },
  { to: "/themas/executive-functies", label: "Executive functies", desc: "Plannen, starten, taakwisselen." },
  { to: "/themas/demand-avoidance", label: "Demand avoidance", desc: "Als 'het moet' juist niet werkt." },
  { to: "/themas/prijzen-onderhandelen", label: "Prijzen en onderhandelen", desc: "Je tarief vragen zonder dat het je dagen kost." },
  { to: "/themas/zichtbaarheid-netwerken", label: "Zichtbaarheid en netwerken", desc: "Gevonden worden zonder netwerk-events." },
];

const items: NavItem[] = [
  { label: "Voor wie", children: voorWie },
  { label: "Thema's", children: themas },
  { to: "/traject", label: "Het traject" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/downloads", label: "Downloads" },
  { to: "/blog", label: "Blog" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  // Sticky nav shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!openSub) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setOpenSub(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSub(null);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openSub]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-2 sm:pt-3">
        <nav
          ref={navRef}
          aria-label="Hoofdnavigatie"
          className={`pointer-events-auto mx-auto flex max-w-[1320px] items-center justify-between gap-3 rounded-full border border-foreground/8 bg-background/70 px-2 py-0.5 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] supports-[backdrop-filter]:bg-background/60 ${
            scrolled ? "shadow-ambient" : "shadow-none"
          }`}
        >
          <Link
            to="/"
            aria-label="Gewoon Anders, terug naar home"
            className="magnet flex items-center rounded-full pl-2 pr-3 py-0"
          >
            <img
              src="/logo.png"
              alt="Gewoon Anders"
              className="h-12 w-auto sm:h-14 lg:h-16"
              width={1000}
              height={250}
            />
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {items.map((item) => {
              if ("children" in item && item.children) {
                const isOpen = openSub === item.label;
                return (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenSub(isOpen ? null : item.label)}
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-medium transition-colors hover:bg-foreground/5 hover:text-foreground ${
                        isOpen ? "bg-foreground/5 text-foreground" : "text-foreground/75"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        aria-hidden
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        role="menu"
                        className="absolute left-1/2 top-full z-50 mt-3 min-w-[360px] -translate-x-1/2 rounded-3xl border border-foreground/8 bg-background/95 p-2 shadow-ambient-lg backdrop-blur-xl"
                      >
                        <ul className="flex flex-col gap-0.5">
                          {item.children.map((c) => (
                            <li key={c.to}>
                              <Link
                                to={c.to}
                                role="menuitem"
                                className="group flex items-start gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-foreground/5"
                                activeProps={{ className: "bg-foreground/5" }}
                              >
                                <div className="flex-1">
                                  <p className="text-[14px] font-semibold text-foreground">
                                    {c.label}
                                  </p>
                                  {c.desc && (
                                    <p className="mt-0.5 text-[13px] leading-snug text-foreground/65">
                                      {c.desc}
                                    </p>
                                  )}
                                </div>
                                <ArrowUpRight
                                  size={16}
                                  className="mt-1 shrink-0 text-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  strokeWidth={1.8}
                                  aria-hidden
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex rounded-full px-3 py-2 text-[14px] font-medium text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
                    activeProps={{ className: "bg-foreground/5 text-foreground" }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            <Link
              to="/contact"
              className="magnet group hidden items-center gap-2.5 rounded-full bg-primary pl-5 pr-1.5 py-1.5 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/95 lg:inline-flex"
            >
              <span>Plan kennismaking</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
                <ArrowUpRight size={14} strokeWidth={2} aria-hidden />
              </span>
            </Link>

            <button
              type="button"
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors hover:bg-foreground/5 xl:hidden"
            >
              <span
                className={`absolute block h-px w-5 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-px w-5 bg-foreground transition-all duration-300 ${
                  open ? "scale-x-0 opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-px w-5 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile expanded overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-30 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-12 pt-44">
          <ul className="mx-auto flex w-full max-w-md flex-col gap-1">
            {items.map((item, idx) => {
              const baseDelay = open ? `${100 + idx * 60}ms` : "0ms";
              if ("children" in item && item.children) {
                return (
                  <li
                    key={item.label}
                    className="overflow-hidden rounded-2xl border border-foreground/8 bg-card/60 backdrop-blur transition-all duration-700"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? "translateY(0)" : "translateY(16px)",
                      transitionDelay: baseDelay,
                    }}
                  >
                    <details>
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-5 py-4 text-[17px] font-semibold text-foreground hover:bg-foreground/5">
                        {item.label}
                        <ChevronDown size={18} aria-hidden className="text-foreground/40" />
                      </summary>
                      <ul className="border-t border-foreground/8 px-2 pb-2">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link
                              to={c.to}
                              className="block rounded-xl px-3 py-3 text-[15px] text-foreground/80 hover:bg-foreground/5"
                              activeProps={{ className: "bg-foreground/5 font-semibold text-foreground" }}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              }
              return (
                <li
                  key={item.to}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: baseDelay,
                  }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-2xl border border-foreground/8 bg-card/60 px-5 py-4 text-[17px] font-semibold text-foreground backdrop-blur hover:bg-foreground/5"
                    activeProps={{ className: "bg-foreground/5" }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li
              className="pt-3"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: open ? `${100 + items.length * 60}ms` : "0ms",
              }}
            >
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-4 text-base font-medium text-primary-foreground"
              >
                <span>Plan een kennismaking</span>
                <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Spacer so floating nav doesn't overlap content */}
      <div className="h-16 sm:h-20 lg:h-24" aria-hidden />
    </>
  );
}
