type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{eyebrow}</p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}
