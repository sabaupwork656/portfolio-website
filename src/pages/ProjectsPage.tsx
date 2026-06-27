import Container from '../components/Container';
import CTASection from '../components/CTASection';
import ProjectCard from '../components/ProjectCard';
import { ScrollReveal, StaggerItem, StaggerReveal } from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <main>
      <section className="hero-mesh py-16">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="Projects"
              title="SaaS, CRM, LMS, dashboard, and automation case studies."
              text="These cards combine detected project details from the workspace with concise, client-facing positioning. Links are placeholders where no live demo was found."
            />
          </ScrollReveal>
        </Container>
      </section>
      <section className="py-16">
        <StaggerReveal className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>
      <CTASection />
    </main>
  );
}
