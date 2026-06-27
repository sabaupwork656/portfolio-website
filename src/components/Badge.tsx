type BadgeProps = {
  children: React.ReactNode;
  tone?: 'light' | 'dark' | 'teal' | 'gold';
};

const tones = {
  light: 'border-white/15 bg-white/5 text-slate-300',
  dark: 'border-white/15 bg-slate-950/50 text-white',
  teal: 'border-sky-300/25 bg-sky-400/10 text-sky-200',
  gold: 'border-violet-300/25 bg-violet-400/10 text-violet-200',
};

export default function Badge({ children, tone = 'light' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur ${tones[tone]}`}>
      {children}
    </span>
  );
}
