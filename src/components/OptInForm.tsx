import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

type Props = {
  /** AC-tag identifier matching the allow-list in /api/subscribe */
  tag:
    | "energiescan"
    | "masking-check"
    | "prijzen-spiekbriefje"
    | "mijn-week-mijn-brein";
  /** Direct link to the PDF, shown after successful opt-in as a backup */
  pdfHref?: string;
  /** Submit button label */
  ctaLabel?: string;
  /** Helper text below the form */
  help?: string;
  /** Ask for first name in addition to email */
  askFirstName?: boolean;
  /** Dark variant inverts colours for use on dark cards */
  variant?: "light" | "dark";
  /** Called after a successful POST so the parent can unlock content */
  onSuccess?: (data: { email: string; firstName: string }) => void;
  /** Custom success state — if provided, replaces the default "Check je inbox" message */
  successContent?: React.ReactNode;
};

export function OptInForm({
  tag,
  pdfHref,
  ctaLabel = "Stuur me het werkblad",
  help = "Eén bevestigingsmail, en daarna hooguit een paar mails over hoe ik werk. Uitschrijven met één klik.",
  askFirstName = false,
  variant = "light",
  onSuccess,
  successContent,
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const dark = variant === "dark";

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    if (askFirstName && !firstName.trim()) return;
    setState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          firstName: firstName.trim(),
          tag,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data.error || "Het lukte even niet. Probeer het straks nog eens.",
        );
      }
      setState("ok");
      onSuccess?.({ email: email.trim(), firstName: firstName.trim() });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Er ging iets mis.");
      setState("error");
    }
  }

  if (state === "ok") {
    if (successContent) {
      return <>{successContent}</>;
    }
    return (
      <div
        className={`rounded-2xl border p-6 ${
          dark
            ? "border-background/15 bg-background/5 text-background"
            : "border-foreground/8 bg-card text-foreground"
        }`}
      >
        <div className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
              dark ? "bg-background/15" : "bg-primary/10 text-primary"
            }`}
          >
            <Check size={16} strokeWidth={2.2} aria-hidden />
          </span>
          <div className="flex-1">
            <p className="text-[16px] font-semibold">Check je inbox.</p>
            <p
              className={`mt-2 text-[14px] leading-relaxed ${
                dark ? "text-background/75" : "text-foreground/75"
              }`}
            >
              Ik heb je een mail gestuurd. Komt 'ie niet door binnen een paar
              minuten? Kijk even in je spam-map.
            </p>
            {pdfHref && (
              <p className="mt-3 text-[13px]">
                <a
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 font-medium underline underline-offset-4 ${
                    dark ? "text-background" : "text-primary"
                  }`}
                >
                  Of download 'm hier direct
                  <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden />
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`rounded-2xl border p-6 ${
        dark
          ? "border-background/15 bg-background/5"
          : "border-foreground/8 bg-card"
      }`}
      noValidate
    >
      <div className={`grid gap-4 ${askFirstName ? "sm:grid-cols-2" : ""}`}>
        {askFirstName && (
          <div>
            <label
              htmlFor={`optin-name-${tag}`}
              className={`block text-[14px] font-semibold ${
                dark ? "text-background" : "text-foreground"
              }`}
            >
              Je voornaam
            </label>
            <input
              id={`optin-name-${tag}`}
              type="text"
              required
              autoComplete="given-name"
              maxLength={80}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Eva"
              disabled={state === "loading"}
              className={`mt-2 w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition-colors focus:ring-2 ${
                dark
                  ? "border-background/20 bg-background/10 text-background placeholder:text-background/40 focus:border-background/40 focus:ring-background/20"
                  : "border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-primary/20"
              }`}
            />
          </div>
        )}
        <div>
          <label
            htmlFor={`optin-email-${tag}`}
            className={`block text-[14px] font-semibold ${
              dark ? "text-background" : "text-foreground"
            }`}
          >
            Je e-mailadres
          </label>
          <input
            id={`optin-email-${tag}`}
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jij@voorbeeld.nl"
            disabled={state === "loading"}
            className={`mt-2 w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition-colors focus:ring-2 ${
              dark
                ? "border-background/20 bg-background/10 text-background placeholder:text-background/40 focus:border-background/40 focus:ring-background/20"
                : "border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-primary/20"
            }`}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={
            state === "loading" ||
            !email.trim() ||
            (askFirstName && !firstName.trim())
          }
          className={`magnet group inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-[14px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
            dark
              ? "bg-background text-foreground hover:bg-background/90"
              : "bg-primary text-primary-foreground hover:bg-primary/95"
          }`}
        >
          {state === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden />
              <span>Bezig…</span>
            </>
          ) : (
            <>
              <span>{ctaLabel}</span>
              <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden />
            </>
          )}
        </button>
      </div>

      {state === "error" && (
        <p
          className={`mt-3 text-[13px] ${
            dark ? "text-background/85" : "text-foreground/80"
          }`}
          role="alert"
        >
          {errorMsg}
        </p>
      )}

      <p
        className={`mt-4 text-[12px] leading-relaxed ${
          dark ? "text-background/60" : "text-foreground/55"
        }`}
      >
        {help}
      </p>
    </form>
  );
}
