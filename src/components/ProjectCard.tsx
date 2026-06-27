import { ArrowUpRight, Github, PlayCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import Button from './Button';
import TechBadge from './TechBadge';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 18, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 18, mass: 0.4 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.article
      className="glow-card glass flex h-full flex-col rounded-2xl p-6 transition hover:border-sky-300/40 hover:shadow-soft"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <p className="relative text-sm font-semibold text-sky-300">{project.category}</p>
      <h3 className="relative mt-3 text-2xl font-semibold tracking-tight text-slate-50">{project.title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>
      <ul className="relative mt-5 grid gap-2 text-sm leading-6 text-slate-300">
        {project.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="relative mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-slate-100">{project.outcome}</p>
      <div className="relative mt-auto flex flex-wrap gap-3 pt-6">
        <Button href={`/projects/${project.slug}`} className="gap-2">
          View Case Study <ArrowUpRight size={16} />
        </Button>
        <Button href={project.links.loom} external variant="secondary" className="gap-2">
          <PlayCircle size={16} /> Watch Loom
        </Button>
        <Button href={project.links.github} external variant="ghost" className="gap-2">
          <Github size={16} /> GitHub
        </Button>
      </div>
    </motion.article>
  );
}
