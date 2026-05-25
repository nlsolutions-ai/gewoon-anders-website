import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Download, Lock, RotateCcw } from "lucide-react";

const UNLOCK_KEY = "unlock:masking-check";
import {
  interpretTotal,
  maskingAnswerOptions,
  situaties,
  topSituaties,
  totalInterpretations,
} from "@/lib/masking-check-data";
import { OptInForm } from "@/components/OptInForm";

export const Route = createFileRoute("/masking-check")({
  head: () => ({
    meta: [
      { title: "Masking-check voor ondernemers - Gewoon Anders" },
      {
        name: "description",
        content:
          "Doe de gratis Masking-check in vijf minuten. Twaalf werksituaties die laten zien waar masking je werk in je bedrijf nog stilletjes afroomt. Voor autistische en AuDHD-ondernemers.",
      },
      { property: "og:title", content: "Masking-check voor ondernemers" },
      {
        property: "og:description",
        content: "Zie in vijf minuten waar masking je werk afroomt.",
      },
      { property: "og:url", content: "/masking-check" },
    ],
    links: [{ rel: "canonical", href: "/masking-check" }],
  }),
  component: MaskingCheckPage,
});

type Stage = "intro" | "question" | "results";

function MaskingCheckPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>(
    () => Array(situaties.length).fill(undefined),
  );

  const total = situaties.length;
  const current = situaties[index];

  useEffect(() => {
    if (stage !== "question") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") {
        select(parseInt(e.key, 10));
      } else if (e.key === "ArrowLeft") {
        goBack();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, index]);

  function start() {
    setStage("question");
    setIndex(0);
  }

  function select(v: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = v;
      return next;
    });
    window.setTimeout(() => {
      if (index < total - 1) {
        setIndex((i) => i + 1);
      } else {
        setStage("results");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 220);
  }

  function goBack() {
    if (index > 0) setIndex((i) => i - 1);
  }

  function goNext() {
    if (answers[index] === undefined) return;
    if (index < total - 1) setIndex((i) => i + 1);
    else {
      setStage("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function reset() {
    setAnswers(Array(situaties.length).fill(undefined));
    setIndex(0);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-[-15%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-[-20%] h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-highlight/40 blur-3xl" />

      {stage === "intro" && <Intro onStart={start} />}
      {stage === "question" && current && (
        <Question
          index={index}
          total={total}
          situatieText={current.text}
          situatieContext={current.context}
          selected={answers[index]}
          onSelect={select}
          onBack={goBack}
          onNext={goNext}
          canBack={index > 0}
          canNext={answers[index] !== undefined && index < total - 1}
          isLast={index === total - 1}
        />
      )}
      {stage === "results" && (
        <Results
          answers={answers.map((v) => (typeof v === "number" ? v : 0))}
          onReset={reset}
        />
      )}
    </div>
  );
}

/* ---------- Intro ---------- */

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 lg:px-10 lg:py-24">
      <span className="eyebrow">Gratis check · 5 minuten</span>
      <h1 className="display-xl mt-6 text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem]">
        Waar maskeer<br />
        je nog in je werk?
      </h1>
      <p className="mt-7 text-[18px] leading-relaxed text-foreground/75">
        Veel autistische en AuDHD-ondernemers maskeren zonder dat ze het doorhebben. Niet
        omdat ze willen liegen, maar omdat ze geleerd hebben dat het anders niet werkt.
        Deze check legt twaalf werksituaties voor waar masking vaak zit. Per situatie
        bekijk je hoe vaak het je in je werk overkomt. Aan het eind zie je waar het je
        het meest kost.
      </p>

      <div className="mt-10 rounded-2xl border border-foreground/8 bg-card p-7">
        <h2 className="text-lg font-semibold text-foreground">Zo werkt het</h2>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-foreground/80">
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
              1
            </span>
            12 herkenbare werksituaties, één per scherm.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
              2
            </span>
            Per situatie kies je hoe vaak je je hierin herkent. Geen overdenken, eerste gevoel.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
              3
            </span>
            Aan het eind lees je waar masking je het meest kost, en wat je ermee kunt.
          </li>
        </ul>
        <p className="mt-5 text-[14px] leading-relaxed text-foreground/65">
          Er zijn geen goede of foute antwoorden. Geen test, geen oordeel.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onStart}
          className="magnet group inline-flex items-center gap-3 rounded-full bg-primary pl-7 pr-2.5 py-2.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/95"
        >
          <span>Start de check</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
            <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden />
          </span>
        </button>
        <p className="text-[14px] text-foreground/55">Geen e-mailadres nodig.</p>
      </div>
    </section>
  );
}

/* ---------- Question ---------- */

function Question({
  index,
  total,
  situatieText,
  situatieContext,
  selected,
  onSelect,
  onBack,
  onNext,
  canBack,
  canNext,
  isLast,
}: {
  index: number;
  total: number;
  situatieText: string;
  situatieContext: string;
  selected: number | undefined;
  onSelect: (v: number) => void;
  onBack: () => void;
  onNext: () => void;
  canBack: boolean;
  canNext: boolean;
  isLast: boolean;
}) {
  const progress = ((index + 1) / total) * 100;

  return (
    <section className="mx-auto max-w-2xl px-6 pt-10 pb-16 lg:px-10 lg:pt-14 lg:pb-24">
      <div className="flex items-center justify-between text-[12px] font-mono uppercase tracking-[0.16em] text-foreground/55">
        <span>Situatie {index + 1} van {total}</span>
        <span>{situatieContext}</span>
      </div>
      <div
        className="mt-3 h-1 w-full overflow-hidden rounded-full bg-foreground/8"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={index + 1}
      >
        <div
          className="h-full bg-primary transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div key={index} className="reveal is-visible mt-14">
        <h2 className="display-lg text-[1.6rem] leading-tight sm:text-[2rem] lg:text-[2.4rem]">
          {situatieText}
        </h2>
        <p className="mt-4 text-[14px] uppercase tracking-[0.14em] text-foreground/55">
          Hoe vaak overkomt jou dit?
        </p>

        <ul className="mt-8 space-y-3">
          {maskingAnswerOptions.map((opt) => {
            const isActive = selected === opt.value;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => onSelect(opt.value)}
                  className={`group flex w-full items-center justify-between gap-4 rounded-2xl border px-6 py-5 text-left text-[17px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-foreground/10 bg-card text-foreground hover:border-primary/40 hover:bg-foreground/[0.02]"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <kbd
                      className={`hidden h-7 w-7 items-center justify-center rounded-md font-mono text-[12px] sm:flex ${
                        isActive
                          ? "bg-primary-foreground/15 text-primary-foreground"
                          : "border border-foreground/10 bg-foreground/5 text-foreground/55"
                      }`}
                      aria-hidden
                    >
                      {opt.value}
                    </kbd>
                    <span className="font-medium">{opt.label}</span>
                  </span>
                  {isActive && <Check size={20} strokeWidth={2.2} aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={!canBack}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] text-foreground/65 transition-colors hover:bg-foreground/5 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft size={16} strokeWidth={1.8} aria-hidden />
          Vorige
        </button>
        {canNext && !isLast && (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-[14px] font-medium text-foreground hover:bg-foreground/10"
          >
            Volgende
            <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden />
          </button>
        )}
        {selected !== undefined && isLast && (
          <button
            type="button"
            onClick={onNext}
            className="magnet group inline-flex items-center gap-3 rounded-full bg-primary pl-5 pr-1.5 py-1.5 text-[14px] font-medium text-primary-foreground"
          >
            <span>Bekijk uitslag</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15">
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden />
            </span>
          </button>
        )}
      </div>

      <p className="mt-10 text-[13px] text-foreground/45">
        Tip: gebruik 1–4 op je toetsenbord om te antwoorden.
      </p>
    </section>
  );
}

/* ---------- Results ---------- */

function Results({
  answers,
  onReset,
}: {
  answers: number[];
  onReset: () => void;
}) {
  const total = useMemo(() => answers.reduce((a, b) => a + b, 0), [answers]);
  const interp = interpretTotal(total);
  const result = totalInterpretations[interp];
  const top = useMemo(() => topSituaties(answers, 3), [answers]);

  const pct = Math.round((total / (situaties.length * 4)) * 100);
  const barColor =
    interp === "low" ? "bg-foreground/30" : interp === "mid" ? "bg-amber-500/70" : "bg-primary";

  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage.getItem(UNLOCK_KEY)) {
      setUnlocked(true);
    }
  }, []);

  function handleUnlock() {
    setUnlocked(true);
    try {
      window.localStorage.setItem(UNLOCK_KEY, new Date().toISOString());
    } catch {
      // Storage disabled
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-20">
      <span className="eyebrow">Je uitslag</span>
      <h1 className="display-xl mt-6 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
        {result.title}.
      </h1>

      {/* Top-line: totaalscore en bar altijd zichtbaar */}
      <div className="mt-8 flex items-baseline gap-3">
        <span className="display-lg text-[3rem] tabular-nums">{total}</span>
        <span className="text-[15px] text-foreground/55">van {situaties.length * 4}</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-foreground/8">
        <div
          className={`h-full transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Opt-in gate */}
      {!unlocked && (
        <div className="mt-10 no-print rounded-3xl border border-primary/20 bg-card p-7 lg:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lock size={16} strokeWidth={1.8} aria-hidden />
            </span>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
              Bekijk je volledige uitslag
            </p>
          </div>
          <h3 className="display-lg mt-4 text-[1.5rem] sm:text-[1.7rem]">
            Vul je naam en e-mail in, dan ontgrendel je je volledige uitslag.
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
            Je krijgt 'm ook in je inbox, zodat je er later rustig op terugkomt of 'm
            kunt downloaden als PDF.
          </p>
          <div className="mt-6">
            <OptInForm
              tag="masking-check"
              askFirstName
              ctaLabel="Ontgrendel mijn uitslag"
              help="Eén bevestigingsmail, en daarna hooguit een paar mails over hoe ik werk. Uitschrijven met één klik."
              onSuccess={handleUnlock}
              successContent={
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={16} strokeWidth={2.2} aria-hidden />
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold text-foreground">
                        Ontgrendeld. Je uitslag staat hieronder.
                      </p>
                      <p className="mt-2 text-[14px] leading-relaxed text-foreground/75">
                        Ik heb je ook een bevestigingsmail gestuurd. Check je inbox
                        (of spam) als die niet binnen een paar minuten arriveert.
                      </p>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      )}

      {/* Detail: interpretatie + top 3 zwaarste posten (geblurd tot unlock) */}
      <div
        className={`mt-10 transition-[filter] duration-700 ${
          unlocked ? "print-unlock" : "select-none blur-[6px]"
        }`}
        aria-hidden={!unlocked}
      >
        <p className="text-[17px] leading-relaxed text-foreground/80">{result.text}</p>

        {top.length > 0 && (
          <div className="mt-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
              Je zwaarste posten
            </p>
            <h2 className="display-lg mt-3 text-[1.6rem] sm:text-[1.8rem]">
              {top.length === 1
                ? "Dit is de plek waar masking nu het meest aan je trekt."
                : `Dit zijn de ${top.length} plekken waar masking nu het meest aan je trekt.`}
            </h2>
            <ul className="mt-6 space-y-3">
              {top.map(({ situatie, score }, i) => (
                <li
                  key={situatie.id}
                  className="flex items-start gap-4 rounded-2xl border border-foreground/8 bg-card p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[13px] font-semibold text-primary tabular-nums">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground/55">
                      {situatie.context}
                    </p>
                    <p className="mt-1 text-[16px] leading-snug text-foreground">
                      {situatie.text}
                    </p>
                  </div>
                  <span className="ml-2 inline-flex shrink-0 items-center rounded-full bg-foreground/5 px-3 py-1 text-[12px] font-mono text-foreground/70 tabular-nums">
                    {score}/4
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/70">
              Je hoeft niet meteen alles anders te doen. Vaak helpt het al om voor één van
              deze posten een kleinere, eerlijker vorm te zoeken. Bijvoorbeeld een ander
              kanaal kiezen, vooraf op papier zetten wat je wil zeggen, of een afspraak iets
              korter inplannen.
            </p>
          </div>
        )}
      </div>

      {/* PDF download (alleen na unlock) */}
      {unlocked && (
        <div className="no-print mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="magnet group inline-flex items-center gap-2.5 rounded-full bg-foreground/[0.04] border border-foreground/10 px-5 py-2.5 text-[14px] font-medium text-foreground hover:bg-foreground/[0.06]"
          >
            <Download size={16} strokeWidth={1.8} aria-hidden />
            <span>Download als PDF</span>
          </button>
          <p className="text-[13px] text-foreground/55">
            Opent het print-venster van je browser. Kies daar 'Opslaan als PDF'.
          </p>
        </div>
      )}

      <div className="mt-14 rounded-3xl border border-foreground/8 bg-foreground p-8 text-background lg:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-background/60">
          En nu?
        </p>
        <h2 className="display-lg mt-3 text-[1.8rem] sm:text-[2rem] text-background">
          Wil je samen kijken wat dit voor jouw bedrijf betekent?
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-background/80">
          Plan vrijblijvend een kennismaking van een half uur, op het kanaal dat jij wil.
          Geen verkoopgesprek, geen verplichting. Een rustig gesprek waarin we kijken of
          het klikt. Daarna beslis jij of je verder wil.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 no-print">
          <Link
            to="/contact"
            className="magnet group inline-flex items-center gap-3 rounded-full bg-background pl-6 pr-2 py-2 text-[15px] font-medium text-foreground"
          >
            <span>Plan vrijblijvend een kennismaking</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
            </span>
          </Link>
          <Link
            to="/themas/masking"
            className="magnet inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-5 py-3 text-[15px] font-medium text-background hover:bg-background/10"
          >
            Lees over masking
          </Link>
        </div>
      </div>

      <div className="mt-10 no-print">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 text-[14px] text-foreground/65 hover:text-foreground link-underline"
        >
          <RotateCcw size={14} strokeWidth={1.8} aria-hidden />
          Opnieuw doen
        </button>
      </div>
    </section>
  );
}
