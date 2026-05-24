import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const explore = [
  { to: "/traject", label: "Het traject" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/over-mij", label: "Over mij" },
  { to: "/faq", label: "Veelgestelde vragen" },
];

const themas = [
  { to: "/themas/masking", label: "Masking" },
  { to: "/themas/overprikkeling", label: "Overprikkeling" },
  { to: "/themas/energie-burnout", label: "Energie & burn-out" },
  { to: "/themas/executive-functies", label: "Executive functies" },
  { to: "/themas/demand-avoidance", label: "Demand avoidance" },
  { to: "/themas/prijzen-onderhandelen", label: "Prijzen & onderhandelen" },
  { to: "/themas/zichtbaarheid-netwerken", label: "Zichtbaarheid" },
];

const voorWie = [
  { to: "/voor-wie/adhd-ondernemers", label: "ADHD" },
  { to: "/voor-wie/autistische-ondernemers", label: "Autisme" },
  { to: "/voor-wie/audhd-ondernemers", label: "AuDHD" },
  { to: "/voor-wie/laat-ontdekt", label: "Laat ontdekt" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        {/* Link zones */}
        <div className="grid gap-12 pt-16 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Gewoon Anders - business coaching"
                className="h-20 w-auto lg:h-24"
                width={1000}
                height={250}
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-foreground/70">
              Business coaching voor ondernemers met een ADHD-, autisme- of AuDHD-brein.
              Een op een, op het kanaal waarop jij het beste denkt.
            </p>
            <div className="mt-6 max-w-sm text-[13px] leading-relaxed text-foreground/60">
              <p>Gewoon Anders is een onderdeel van NorthernLights Solutions.</p>
              <p className="mt-1">
                Ondernemingsnummer 1037.471.022 · BTW BE1037471022
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="mailto:info@northernlights.solutions"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <Mail size={14} strokeWidth={1.8} aria-hidden />
                    <span className="link-underline">info@northernlights.solutions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/31639479021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                  >
                    <WhatsAppIcon size={14} />
                    <span className="link-underline">WhatsApp +31 6 39 47 90 21</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Verkennen" items={explore} />
            <FooterCol title="Voor wie" items={voorWie} />
            <FooterCol title="Thema's" items={themas} />
          </div>
        </div>

        <div className="border-t border-foreground/10 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[13px] text-foreground/55">
              &copy; {new Date().getFullYear()} Gewoon Anders
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/privacy" className="text-[13px] text-foreground/65 hover:text-foreground link-underline">
                Privacy
              </Link>
              <Link to="/voorwaarden" className="text-[13px] text-foreground/65 hover:text-foreground link-underline">
                Voorwaarden
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-[13px] text-foreground/65 hover:text-foreground link-underline"
              >
                <Mail size={13} strokeWidth={1.8} aria-hidden />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((c) => (
          <li key={c.to}>
            <Link
              to={c.to}
              className="text-[14px] text-foreground/80 transition-colors hover:text-foreground link-underline"
            >
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
