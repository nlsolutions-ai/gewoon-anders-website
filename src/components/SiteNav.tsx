import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/traject", label: "Het traject" },
  { to: "/over-mij", label: "Over mij" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/faq", label: "Veelgestelde vragen" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <nav
        aria-label="Hoofdnavigatie"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10"
      >
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Gewoon Anders
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-semibold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Plan een gratis kennismaking
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-lg px-3 py-3 text-base text-foreground/90 hover:bg-secondary"
                  activeProps={{ className: "bg-secondary font-semibold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground"
              >
                Plan een gratis kennismaking
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
