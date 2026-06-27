type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, text, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{text}</p> : null}
    </div>
  );
}
