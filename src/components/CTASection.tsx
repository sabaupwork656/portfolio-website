import { ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import Button from './Button';
import Container from './Container';

export default function CTASection() {
  return (
    <section className="py-16 text-white">
      <Container className="hero-mesh glass-strong grid gap-8 rounded-3xl p-7 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Build the useful version first</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Have a SaaS, dashboard, or Rails project in mind?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Share the product idea, current app, or messy workflow. I can help scope the MVP, build the core system, or improve what already exists.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Button href={profile.upwork} external variant="secondary" className="gap-2">
            Book a Call <ArrowRight size={16} />
          </Button>
          <Button href="/projects" variant="ghost" className="border border-white/15 text-white hover:bg-white/10">
            View Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
