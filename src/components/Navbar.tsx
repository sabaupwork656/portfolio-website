import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../data/profile';
import Button from './Button';
import Container from './Container';

const navItems = [
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <Container className="glass flex h-16 items-center justify-between rounded-2xl px-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-black text-white shadow-card">R</span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-4 text-slate-50">{profile.title}</span>
            <span className="block text-xs text-slate-400">SaaS, CRM, dashboards, APIs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-sky-500/20 text-sky-200' : 'text-slate-300 hover:bg-white/10 hover:text-slate-50'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Button href={profile.upwork} external>
            Book a Call
          </Button>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="mt-3 md:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-slate-50"
              >
                {label}
              </NavLink>
            ))}
            <Button href={profile.upwork} external className="mt-2">
              Book a Call
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
