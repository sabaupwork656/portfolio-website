import { CheckCircle2 } from 'lucide-react';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';

export default function AboutPage() {
  return (
    <main>
      <section className="hero-mesh py-16">
        <Container>
          <SectionHeader
            eyebrow="About"
            title="A practical full-stack developer for Rails products, SaaS MVPs, and serious business workflows."
            text="I focus on useful product delivery: clean architecture, clear interfaces, strong data modeling, and enough business context to build the right first version."
          />
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="prose-text">
            <p>
              I build real business applications with Ruby on Rails, React, Angular, PostgreSQL, APIs, and deployment-ready workflows. The best projects are usually practical: a founder needs an MVP, a team needs a dashboard, a business needs a CRM, or an existing Rails app needs calm, focused improvement.
            </p>
            <p>
              My work is shaped around maintainability and client outcomes. That means sensible Rails models, clear permissions, responsive UI, reliable integrations, and handoff notes that make the next step easier.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'SaaS MVP development',
              'CRM and lead management systems',
              'Dashboards and admin panels',
              'EdTech and LMS workflows',
              'Rails APIs and PostgreSQL data models',
              'React and Angular interfaces',
              'Stripe, Twilio, OpenAI, and third-party APIs',
              'Existing app fixes and feature completion',
            ].map((item) => (
              <div key={item} className="glass flex gap-3 rounded-2xl p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-sky-300" size={18} />
                <span className="text-sm font-semibold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
