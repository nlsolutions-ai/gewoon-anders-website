import { Video, Phone, MessageSquare, Mail } from "lucide-react";

const channels = [
  {
    icon: Video,
    title: "Videobellen",
    text: "Een gesprek van zestig minuten met beeld.",
    when: "Voor wie energie haalt uit gezichtscontact en het gesprek met beeld levendiger vindt.",
  },
  {
    icon: Phone,
    title: "Bellen zonder beeld",
    text: "Een gesprek van zestig minuten, alleen je stem.",
    when: "Voor wie door beeld wordt afgeleid of uitgeput. Vaak rustiger en geconcentreerder.",
  },
  {
    icon: MessageSquare,
    title: "Live chatten",
    text: "Tekstgesprek in een afgesproken tijdvak van zestig minuten.",
    when: "Voor wie beter denkt en formuleert in tekst, of voor wie spreken op afroep belastend is.",
  },
  {
    icon: Mail,
    title: "Mailsessie",
    text: "Jij schrijft je situatie uit, ik stuur binnen drie werkdagen een uitgewerkte reactie.",
    when: "Voor wie tijd nodig heeft om te ordenen, of een drukke en onvoorspelbare agenda heeft.",
  },
];

export function ChannelCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {channels.map(({ icon: Icon, title, text, when }, i) => (
        <li
          key={title}
          className={`group relative overflow-hidden rounded-3xl border border-foreground/8 bg-card p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-ambient ${
            i === 1 || i === 2 ? "sm:translate-y-4" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
              <Icon size={22} strokeWidth={1.6} aria-hidden />
            </span>
            <span className="text-[11px] font-mono text-foreground/30">
              0{i + 1}
            </span>
          </div>
          <h3 className="mt-5 text-[19px] font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{text}</p>
          <div className="mt-5 border-t border-foreground/8 pt-4">
            <p className="text-[13px] leading-relaxed text-foreground/60">{when}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
