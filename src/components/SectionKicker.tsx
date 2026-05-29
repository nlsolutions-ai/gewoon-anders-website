/**
 * Magazine-style section header: an index numeral (01 / 02) with a hairline
 * eyebrow kicker. Use `light` on dark ink sections.
 */
export function SectionKicker({
  index,
  label,
  light,
}: {
  index?: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {index && (
        <span className={`section-index ${light ? "!text-background/50" : ""}`}>{index}</span>
      )}
      <span className={`eyebrow ${light ? "!text-background/90" : ""}`}>{label}</span>
    </div>
  );
}
