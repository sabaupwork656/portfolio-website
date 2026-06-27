import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Layers } from 'lucide-react';
import Badge from '../components/Badge';
import Button from '../components/Button';
import ContactSection from '../components/ContactSection';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import Hero3DScene from '../components/Hero3DScene';
import ProjectCard from '../components/ProjectCard';
import { fadeUp, ScrollReveal, StaggerItem, StaggerReveal } from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { featuredProjects } from '../data/projects';
import { services } from '../data/services';
import { techStack } from '../data/techStack';
import { clientNeeds, processSteps } from '../data/trust';
import { profile } from '../data/profile';

const trustBadges = ['Ruby on Rails', 'React', 'SaaS MVPs', 'Dashboards', 'API Integrations'];

export default function HomePage() {
  return (
    <main>
      <section className="hero-mesh overflow-hidden py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge tone="teal">Ruby on Rails & React SaaS MVP Developer</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              I build SaaS MVPs, CRM systems, and dashboards with Ruby on Rails & React.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I help founders turn ideas into clean, scalable web applications with strong backend architecture, polished UI, and fast delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" className="gap-2">
                View Projects <ArrowRight size={16} />
              </Button>
              <Button href={profile.upwork} external variant="secondary">
                Book a Call
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </div>
          <div>
            <Hero3DScene />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Services"
              title="Business applications built around the workflow, not just the framework."
              text="From first MVP scope to existing app cleanup, each service is focused on shipping useful software with clean Rails architecture and a polished SaaS interface."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Featured projects"
              title="Portfolio work focused on SaaS, CRMs, dashboards, and EdTech."
              text="Project details were extracted from the local workspace where possible, with honest positioning for demos and MVP prototypes."
            />
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </ScrollReveal>
          <StaggerReveal className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Process"
              title="A clear build path from idea to production-ready handoff."
              text="The process is intentionally simple: understand the business workflow, plan the architecture, build the useful version, then refine and deploy."
              align="center"
            />
          </ScrollReveal>
          <StaggerReveal className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map(([title, text], index) => (
              <motion.article key={title} variants={fadeUp} className="glow-card glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-sky-300/40">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sm font-black text-sky-200">
                  {index + 1}
                </span>
                <h3 className="relative mt-4 text-base font-semibold text-slate-50">{title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </motion.article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20 text-white">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Tech stack"
              title="Rails depth, modern frontend delivery, and practical integrations."
              text="A focused stack for web products that need real data modeling, clean interfaces, admin workflows, APIs, and deployment."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group) => (
              <motion.article key={group.group} variants={fadeUp} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{group.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Why work with me"
              title="Built for founders who care about speed, clarity, and maintainable foundations."
              text="The goal is not to impress with complexity. The goal is to build the version that helps your business learn, sell, operate, and scale."
            />
          </ScrollReveal>
          <StaggerReveal className="grid gap-4 sm:grid-cols-2">
            {[
              'Clean architecture',
              'Fast MVP delivery',
              'Clear communication',
              'Business-first thinking',
              'Reliable bug fixing',
              'Scalable foundations',
              'Comfortable with existing codebases',
              'Strong backend and UI balance',
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="glass flex items-center gap-3 rounded-2xl p-4">
                <CheckCircle2 className="shrink-0 text-sky-300" size={20} />
                <span className="text-sm font-semibold text-slate-100">{item}</span>
              </motion.div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Client needs"
              title="What clients usually need help with."
              text="No invented testimonials here. These are the common project situations this portfolio is designed to answer."
            />
          </ScrollReveal>
          <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {clientNeeds.map((need) => (
              <motion.article key={need.title} variants={fadeUp} className="glow-card glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet-300/40">
                <Clock className="relative text-sky-300" size={22} />
                <h3 className="relative mt-4 text-base font-semibold text-slate-50">{need.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-300">{need.text}</p>
              </motion.article>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <ScrollReveal>
            <Badge tone="gold">About</Badge>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Practical full-stack development for products that need to work in the real world.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              I focus on building real business applications, not just code samples: SaaS MVPs, CRM systems, dashboards, EdTech platforms, APIs, and long-term Rails improvements. The work combines Ruby on Rails, React, Angular, PostgreSQL, integrations, and maintainable product thinking.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid gap-3 sm:grid-cols-2">
            {['SaaS MVPs', 'CRM systems', 'Admin panels', 'EdTech platforms', 'API integrations', 'Rails improvements'].map((item) => (
              <motion.div key={item} variants={fadeUp} className="glass flex items-center gap-3 rounded-2xl p-4">
                <Layers className="text-sky-300" size={18} />
                <span className="text-sm font-semibold text-slate-100">{item}</span>
              </motion.div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <CTASection />
      <ContactSection />
    </main>
  );
}
