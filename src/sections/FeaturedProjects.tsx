import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <Section id="work" className="bg-ink-50/60 dark:bg-ink-950">
      <SectionHeading
        eyebrow="Featured Work"
        title="Production AI, told as case studies"
        subtitle="Each project below ships under load today. Click through for the problem, the architecture, the trade-offs, and the outcomes."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
