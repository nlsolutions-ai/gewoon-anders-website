import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, RotateCcw } from "lucide-react";
import {
  answerOptions,
  gebieden,
  interpret,
  scoresByGebied,
  statements,
  type Interpretation,
} from "@/lib/energiescan-data";

export const Route = createFileRoute("/energiescan")({
  head: () => ({
    meta: [
      { title: "Ondernemers-energiescan - Gewoon Anders" },
      {
        name: "description",
        content:
          "Doe de gratis Ondernemers-energiescan in tien minuten. 18 stellingen, vijf gebieden, een rustige uitslag in gewone taal. Voor ondernemers met een ADHD-, autisme- of AuDHD-brein.",
      },
      { property: "og:title", content: "Ondernemers-energiescan" },
      {
        property: "og:description",
        content: "In tien minuten weet je waar je energie wegloopt en waar je kracht zit.",
      },
      { property: "og:url", content: "/energiescan" },
    ],
    links: [{ rel: "canonical", href: "/energiescan" }],
  }),
  component: EnergiescanPage,
});

type Stage = "intro" | "question" | "results";

function EnergiescanPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>(
    () => Array(statements.length).fill(undefined),
  );

  const totalCount = statements.length;
  const current = statements[index];
  const currentGebied = gebieden.find((g) => g.id === current?.gebied);

  // Keyboard shortcuts 1-4 to answer, arrows to navigate
  useEffect(() => {
    if (stage !== "question") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= "4") {
        const v = parseInt(e.key, 10);
        select(v);
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
    // small delay so the visual feedback is visible before advancing
    window.setTimeout(() => {
      if (index < totalCount - 1) {
        setIndex((i) => i + 1);
      } else {
        setStage("results");
        // make sure top of results is visible
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 220);
  }

  function goBack() {
    if (index > 0) setIndex((i) => i - 1);
  }

  function goNext() {
    if (answers[index] === undefined) return;
    if (index < totalCount - 1) setIndex((i) => i + 1);
    else {
      setStage("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function reset() {
    setAnswers(Array(statements.length).fill(undefined));
    setIndex(0);
    setStage("intro");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-[-20%] h-[420px] w-[420px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-[-15%] h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-highlight/40 blur-3xl" />

      {stage === "intro" && <Intro onStart={start} />}
      {stage === "question" && current && currentGebied && (
        <Question
          index={index}
          total={totalCount}
          statement={current.text}
          gebiedTitle={currentGebied.title}
          selected={answers[index]}
          onSelect={select}
          onBack={goBack}
          onNext={goNext}
          canBack={index > 0}
          canNext={answers[index] !== undefined && index < totalCount - 1}
          isLast={index === totalCount - 1}
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
      <span className="eyebrow">Gratis scan · 10 minuten</span>
      <h1 className="display-xl mt-6 text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem]">
        Waar lekt de energie<br />
        in jouw bedrijf?
      </h1>
      <p className="mt-7 text-[18px] leading-relaxed text-foreground/75">
        Veel ondernemers met een ADHD-, autisme- of AuDHD-brein werken keihard en snappen
        niet waarom ze toch leeg raken. Deze scan helpt je zien waar je energie weglekt.
        Niet om iets te repareren, maar om jezelf beter te begrijpen.
      </p>

      <div className="mt-10 rounded-2xl border border-foreground/8 bg-card p-7">
        <h2 className="text-lg font-semibold text-foreground">Zo werkt het</h2>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-foreground/80">
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
              1
            </span>
            18 korte stellingen, verdeeld over vijf gebieden.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
              2
            </span>
            Per stelling kies je hoe veel het voor jou klopt. Eerste gevoel werkt het best.
          </li>
          <li className="flex gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
              3
            </span>
            Aan het eind lees je per gebied wat je antwoorden waarschijnlijk betekenen.
          </li>
        </ul>
        <p className="mt-5 text-[14px] leading-relaxed text-foreground/65">
          Er zijn geen goede of foute antwoorden. Geen test, geen diagnose. Wel een rustig
          moment om naar je werk te kijken.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onStart}
          className="magnet group inline-flex items-center gap-3 rounded-full bg-primary pl-7 pr-2.5 py-2.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/95"
        >
          <span>Start de scan</span>
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
  statement,
  gebiedTitle,
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
  statement: string;
  gebiedTitle: string;
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
      {/* Progress */}
      <div className="flex items-center justify-between text-[12px] font-mono uppercase tracking-[0.16em] text-foreground/55">
        <span>Stelling {index + 1} van {total}</span>
        <span>{gebiedTitle}</span>
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

      {/* Statement, keyed so React remounts and fade animates */}
      <div key={index} className="reveal is-visible mt-14">
        <h2 className="display-lg text-[1.8rem] leading-tight sm:text-[2.2rem] lg:text-[2.6rem]">
          {statement}
        </h2>
        <p className="mt-4 text-[14px] uppercase tracking-[0.14em] text-foreground/55">
          Hoeverre klopt dit voor jou?
        </p>

        <ul className="mt-8 space-y-3">
          {answerOptions.map((opt) => {
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

      {/* Nav */}
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
  const scores = useMemo(() => scoresByGebied(answers), [answers]);
  const totalEnergyLeaks = gebieden.filter((g) => interpret(g, scores[g.id]) === "high").length;

  return (
    <section className="mx-auto max-w-3xl px-6 py-14 lg:px-10 lg:py-20">
      <span className="eyebrow">Je uitslag</span>
      <h1 className="display-xl mt-6 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
        Hier zit je energie nu.
      </h1>
      <p className="mt-6 text-[17px] leading-relaxed text-foreground/75">
        Vijf gebieden, vijf scores. Onder elk gebied lees je in gewone taal wat je
        antwoorden waarschijnlijk betekenen. Een hoge score is geen verwijt. Het is een
        plek waar verandering het meeste oplevert.
      </p>

      <div className="mt-10 space-y-4">
        {gebieden.map((g) => {
          const score = scores[g.id];
          const total = g.count * 4;
          const interp = interpret(g, score);
          return <ResultCard key={g.id} gebied={g} score={score} total={total} interp={interp} />;
        })}
      </div>

      {/* Sluittekst */}
      <div className="mt-14 rounded-3xl border border-foreground/8 bg-highlight p-8 lg:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
          En nu?
        </p>
        <h2 className="display-lg mt-3 text-[1.8rem] sm:text-[2rem]">
          {totalEnergyLeaks === 0
            ? "Geen acute energielekken. Mooi punt om vanuit te bouwen."
            : totalEnergyLeaks === 1
              ? "Eén gebied waar energie weglekt. Daar is winst te halen."
              : `${totalEnergyLeaks} gebieden waar energie weglekt. Dat verklaart waarschijnlijk veel.`}
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-foreground/80">
          De vijf gebieden van deze scan zijn niet toevallig gekozen. Ze vormen samen Het
          Anders Fundament: de methodiek waarmee ik ondernemers help hun bedrijf opnieuw
          af te stemmen op hun brein.
        </p>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/80">
          Wil je samen rustig naar jouw uitslag kijken? Plan vrijblijvend een kennismaking
          van een half uur, op het kanaal dat jij wil. Geen verkoopgesprek, geen
          verplichting. Een rustig gesprek waarin we kijken of het klikt. Daarna beslis
          jij of je verder wil.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="magnet group inline-flex items-center gap-3 rounded-full bg-primary pl-6 pr-2 py-2 text-[15px] font-medium text-primary-foreground hover:bg-primary/95"
          >
            <span>Plan vrijblijvend een kennismaking</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]">
              <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden />
            </span>
          </Link>
          <Link
            to="/traject"
            className="magnet inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-3 text-[15px] font-medium text-foreground hover:bg-secondary"
          >
            Bekijk het traject
          </Link>
        </div>
      </div>

      <div className="mt-10">
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

function ResultCard({
  gebied,
  score,
  total,
  interp,
}: {
  gebied: (typeof gebieden)[number];
  score: number;
  total: number;
  interp: Interpretation;
}) {
  const result = gebied.results[interp];
  const pct = Math.round((score / total) * 100);

  const dotColor =
    interp === "low"
      ? "bg-foreground/30"
      : interp === "mid"
        ? "bg-amber-500/70"
        : "bg-primary";
  const labelText =
    interp === "low" ? "rust" : interp === "mid" ? "iets te winnen" : "energielek";
  const labelBg =
    interp === "low"
      ? "bg-foreground/5 text-foreground/65"
      : interp === "mid"
        ? "bg-amber-500/10 text-amber-700"
        : "bg-primary/10 text-primary";

  return (
    <article className="rounded-3xl border border-foreground/8 bg-card p-7 transition-all duration-500 hover:shadow-ambient lg:p-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
            Gebied {gebied.id}
          </p>
          <h3 className="display-lg mt-2 text-[1.5rem] sm:text-[1.7rem]">{gebied.title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-foreground/65">
            {gebied.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] ${labelBg}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden />
            {labelText}
          </span>
        </div>
      </header>

      {/* Score bar */}
      <div className="mt-6 flex items-baseline gap-3">
        <span className="display-lg text-[2rem] tabular-nums">{score}</span>
        <span className="text-[14px] text-foreground/55">van {total}</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-foreground/8">
        <div
          className={`h-full transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${dotColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-6 border-t border-foreground/8 pt-5">
        <p className="text-[15px] font-semibold text-foreground">{result.title}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{result.text}</p>
      </div>
    </article>
  );
}
