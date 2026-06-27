import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
};

const variants = {
  primary: 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-soft hover:-translate-y-0.5 hover:opacity-95',
  secondary: 'border border-white/15 bg-white/10 text-slate-100 hover:-translate-y-0.5 hover:bg-white/15',
  ghost: 'bg-transparent text-slate-200 hover:bg-white/10 hover:text-sky-200',
};

export default function Button({ children, href, variant = 'primary', external, className = '' }: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  );
}
