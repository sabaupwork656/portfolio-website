import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from './ScrollReveal';

type ServiceCardProps = {
  title: string;
  icon: LucideIcon;
  problem: string;
  deliverables: string;
  description: string;
};

export default function ServiceCard({ title, icon: Icon, problem, deliverables, description }: ServiceCardProps) {
  return (
    <motion.article variants={fadeUp} className="glow-card glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-soft">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
        <Icon size={21} />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold text-slate-50">{title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="relative mt-5 space-y-3 border-t border-white/10 pt-5">
        <p className="text-sm leading-6 text-slate-300">
          <span className="font-semibold text-slate-100">Problem: </span>
          {problem}
        </p>
        <p className="text-sm leading-6 text-slate-300">
          <span className="font-semibold text-slate-100">Deliverables: </span>
          {deliverables}
        </p>
      </div>
    </motion.article>
  );
}
