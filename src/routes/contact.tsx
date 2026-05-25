import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Plan een gratis kennismaking - Gewoon Anders" },
      {
        name: "description",
        content:
          "Plan een gratis kennismaking van dertig minuten op het kanaal dat jij kiest. Geen verplichtingen.",
      },
      { property: "og:title", content: "Contact - Gewoon Anders" },
      { property: "og:description", content: "Plan een gratis kennismaking." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { v: "video", l: "Videobellen" },
  { v: "bellen", l: "Bellen zonder beeld" },
  { v: "chat", l: "Chatten" },
  { v: "mail", l: "Mailen" },
  { v: "onbekend", l: "Weet ik nog niet" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <PageHeader
        title="Plan een gratis kennismaking."
        intro="Een kennismaking duurt dertig minuten en is gratis. We kijken samen rustig of het klikt. Je zit nergens aan vast. Hieronder kun je een bericht sturen. Ik reageer binnen twee werkdagen."
      />

      <section className="mx-auto max-w-2xl px-6 pb-24 lg:px-10">
        {sent ? (
          <FadeIn>
            <div className="rounded-2xl bg-highlight p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Bedankt voor je bericht.
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">
                Ik heb het goed ontvangen en reageer binnen twee werkdagen per mail. Je
                hoeft verder niets te doen.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
              <p className="text-[15px] leading-relaxed text-foreground/75">
                Het formulier heeft vijf velden. Na het versturen krijg je een
                bevestiging in beeld, en ik reageer binnen twee werkdagen per mail.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-7" noValidate>
                <Field
                  id="naam"
                  label="Naam"
                  required
                  input={<input type="text" id="naam" name="naam" required maxLength={100} className={inputCls} />}
                />
                <Field
                  id="email"
                  label="E-mailadres"
                  required
                  input={<input type="email" id="email" name="email" required maxLength={200} className={inputCls} />}
                />
                <Field
                  id="vraag"
                  label="Waar loop je tegenaan?"
                  required
                  input={
                    <textarea
                      id="vraag"
                      name="vraag"
                      required
                      rows={5}
                      maxLength={2000}
                      className={`${inputCls} resize-y`}
                    />
                  }
                />

                <fieldset>
                  <legend className="text-[15px] font-semibold text-foreground">
                    Welk kanaal heeft je voorkeur voor de kennismaking?{" "}
                    <span className="font-normal text-foreground/60">(verplicht)</span>
                  </legend>
                  <div className="mt-4 space-y-2">
                    {channels.map((c) => (
                      <label
                        key={c.v}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background p-4 text-[15px] text-foreground/85 hover:bg-secondary has-[:checked]:border-primary has-[:checked]:bg-highlight"
                      >
                        <input
                          type="radio"
                          name="kanaal"
                          value={c.v}
                          required
                          className="h-5 w-5 accent-primary"
                        />
                        <span>{c.l}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Field
                  id="extra"
                  label="Is er iets dat ik vooraf moet weten zodat het gesprek prettig verloopt?"
                  optional
                  help="Dit veld is optioneel. Je mag hier bijvoorbeeld aangeven dat je liever niet gebeld wordt, of dat je tijd nodig hebt om na te denken. Zo kan ik de kennismaking prettig maken voor jou."
                  input={
                    <textarea
                      id="extra"
                      name="extra"
                      rows={4}
                      maxLength={1500}
                      className={`${inputCls} resize-y`}
                    />
                  }
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Verstuur mijn bericht
                </button>
              </form>
            </div>
          </FadeIn>
        )}

        <FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:hallo@gewoonanders.nu"
              className="magnet group flex items-center gap-4 rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-ambient"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                  E-mail
                </span>
                <span className="mt-0.5 block truncate text-[15px] font-medium text-foreground">
                  hallo@gewoonanders.nu
                </span>
              </span>
            </a>

            <a
              href="https://wa.me/31639479021"
              target="_blank"
              rel="noopener noreferrer"
              className="magnet group flex items-center gap-4 rounded-2xl border border-foreground/8 bg-card p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-ambient"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/15">
                <WhatsAppIcon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                  WhatsApp Business
                </span>
                <span className="mt-0.5 block truncate text-[15px] font-medium text-foreground">
                  +31 6 39 47 90 21
                </span>
              </span>
            </a>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-foreground/65">
            Ik reageer op mail en WhatsApp binnen twee werkdagen, op vaste momenten. Geen 24/7 beschikbaarheid.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 rounded-2xl border border-border bg-card/60 p-6 text-[14px] leading-relaxed text-foreground/70">
            <p className="font-semibold text-foreground">Bedrijfsgegevens</p>
            <p className="mt-2">
              Gewoon Anders is een onderdeel van NorthernLights Solutions.
            </p>
            <p className="mt-1">Ondernemingsnummer: 1037.471.022</p>
            <p>Btw-nummer: BE1037471022</p>
            <p>Gevestigd in België</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

const inputCls =
  "mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-[16px] text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

function Field({
  id,
  label,
  input,
  required,
  optional,
  help,
}: {
  id: string;
  label: string;
  input: React.ReactNode;
  required?: boolean;
  optional?: boolean;
  help?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[15px] font-semibold text-foreground">
        {label}{" "}
        <span className="font-normal text-foreground/60">
          {required ? "(verplicht)" : optional ? "(optioneel)" : null}
        </span>
      </label>
      {help && <p className="mt-2 text-[14px] leading-relaxed text-foreground/70">{help}</p>}
      {input}
    </div>
  );
}
