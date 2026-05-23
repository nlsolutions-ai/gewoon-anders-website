import { Video, Phone, MessageSquare, Mail } from "lucide-react";

const channels = [
  { icon: Video, title: "Videobellen", text: "Een gesprek van zestig minuten met beeld." },
  { icon: Phone, title: "Bellen zonder beeld", text: "Een gesprek van zestig minuten, alleen je stem." },
  { icon: MessageSquare, title: "Live chatten", text: "Een tekstgesprek van zestig minuten in een afgesproken tijdvak." },
  { icon: Mail, title: "Mailsessie", text: "Jij schrijft je situatie uit, ik stuur een uitgewerkte reactie terug." },
];

export function ChannelCards() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {channels.map(({ icon: Icon, title, text }) => (
        <li
          key={title}
          className="rounded-xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(31,58,82,0.04)]"
        >
          <Icon className="text-primary" size={26} strokeWidth={1.6} aria-hidden />
          <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">{text}</p>
        </li>
      ))}
    </ul>
  );
}
