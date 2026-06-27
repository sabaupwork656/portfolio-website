import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 text-white">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div>
          <p className="text-lg font-semibold gradient-text">{profile.title}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Practical full-stack development for SaaS MVPs, CRMs, dashboards, EdTech platforms, APIs, and long-term Rails app improvements.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a className="footer-link" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a className="footer-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="footer-link" href={profile.upwork} target="_blank" rel="noreferrer" aria-label="Upwork">
            <Linkedin size={18} />
          </a>
          <Link className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10" to="/contact">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
