import { Link } from "@tanstack/react-router";

const cols: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/traject", label: "Het traject" },
  { to: "/over-mij", label: "Over mij" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/faq", label: "Veelgestelde vragen" },
  { to: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="text-lg font-semibold text-foreground">Gewoon Anders</p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
            Business coaching voor neurodivergente ondernemers.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
            Paginas
          </p>
          <ul className="mt-4 space-y-2">
            {cols.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
            Juridisch
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacy" className="text-[15px] text-foreground/80 hover:text-foreground">
                Privacyverklaring
              </Link>
            </li>
            <li>
              <Link to="/voorwaarden" className="text-[15px] text-foreground/80 hover:text-foreground">
                Algemene voorwaarden
              </Link>
            </li>
          </ul>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-foreground/70">
            Gewoon Anders biedt coaching, geen zorg. Er worden geen diagnoses gesteld
            en geen behandeling gegeven.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-foreground/60 lg:px-10">
          &copy; {new Date().getFullYear()} Gewoon Anders. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
