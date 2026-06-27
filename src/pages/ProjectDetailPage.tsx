import { ArrowLeft, Github, PlayCircle } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import CaseStudyCard from '../components/CaseStudyCard';
import Container from '../components/Container';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main>
      <section className="py-10">
        <Container>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-sky-200" to="/projects">
            <ArrowLeft size={16} /> Back to projects
          </Link>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <CaseStudyCard project={project} />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <article className="glass rounded-3xl p-6">
            <SectionHeader title="Architecture notes" text="Technical direction extracted or inferred from the visible project files and README content." />
            <div className="mt-6 grid gap-3">
              {project.architecture.map((note) => (
                <p key={note} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                  {note}
                </p>
              ))}
            </div>
          </article>
          <article className="glass rounded-3xl p-6">
            <SectionHeader title="What I would improve next" />
            <ul className="mt-6 grid gap-3">
              {project.improvements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="glass-strong rounded-3xl p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <SectionHeader
                  eyebrow={project.screenshots?.length ? 'Product screenshots' : 'Screenshots area'}
                  title={project.screenshots?.length ? `${project.title} product screens.` : 'Add product screenshots or Loom embeds here.'}
                  text={
                    project.screenshots?.length
                      ? 'Real interface captures from the project, showing the main workflow areas clients can inspect.'
                      : `${project.sourceNote} No local screenshots were found for this portfolio build, so this area is ready for future captures.`
                  }
                />
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href={project.links.loom} external variant="secondary" className="gap-2">
                  <PlayCircle size={16} /> Watch Loom
                </Button>
                <Button href={project.links.github} external variant="ghost" className="gap-2">
                  <Github size={16} /> GitHub
                </Button>
              </div>
            </div>

            {project.screenshots?.length ? (
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <figure
                    key={screenshot.src}
                    className={index === 0 ? 'overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:col-span-2' : 'overflow-hidden rounded-2xl border border-white/10 bg-white/5'}
                  >
                    <img className="aspect-[1366/650] w-full object-cover" src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                    <figcaption className="border-t border-white/10 px-4 py-3 text-sm font-semibold text-slate-200">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <CTASection />
    </main>
  );
}
