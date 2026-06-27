import type { Project } from '../data/projects';
import SectionHeader from './SectionHeader';
import TechBadge from './TechBadge';

export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <article className="glass-strong rounded-3xl p-6 lg:p-8">
      <SectionHeader eyebrow={project.category} title={project.title} text={project.description} />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-50">Problem</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.problem}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-50">Solution</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.solution}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h3 className="text-lg font-semibold text-slate-50">Features</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-semibold text-slate-100">
                {feature}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-50">Tech Stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
