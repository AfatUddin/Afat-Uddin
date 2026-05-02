import { motion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const PRINCIPLES = [
  {
    title: "Production over demos",
    body: "AI features only matter once they're tenant-aware, billed correctly, and observable. I optimize for what survives the first 90 days in production.",
  },
  {
    title: "Cost-aware AI",
    body: "Every prompt, embedding, and async job carries a price tag. I design fast paths, cached retrievals, and tiered model routing so the spend matches the value.",
  },
  {
    title: "Boring, on purpose",
    body: "PostgreSQL with pgvector. Celery for async. Stripe for billing. I reach for proven primitives so the novelty lives in the AI surface, not the plumbing.",
  },
  {
    title: "Tested or it didn't ship",
    body: "Hermetic pytest suites with auto-mocked external services. CI fails fast, deploys are calm, and rollbacks aren't drama.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              I build AI systems that think in <em className="not-italic accent-text">production</em>, not slides.
            </>
          }
          subtitle={
            <>
              Three years shipping Python and Django backends, the last twelve months focused entirely on Generative AI: multi-tenant SaaS, RAG, LLM service layers, async pipelines, and the unglamorous work that turns a demo into a product.
            </>
          }
        />

        <Reveal className="space-y-5 text-base leading-relaxed text-ink-700 dark:text-ink-300">
          <p>
            I currently lead backend for two production GenAI platforms at <strong className="text-ink-900 dark:text-white">CodefusionAI</strong> — CreativeGenie (AI content creation) and Creative Experience (AI document analytics with RAG). Before that, I built SaaS tooling at Mediusware Ltd. integrating OAuth, Google APIs, and multi-channel outreach pipelines.
          </p>
          <p>
            My favorite kind of problem is the one where a team has an AI prototype that works in a notebook and needs the version that survives real customers — workspace boundaries, billing, async pipelines, observability, and a real test suite.
          </p>
          <p>
            I write Python like a software engineer, not a script kiddie — clean service layers, typed boundaries, and abstractions that actually pay rent. {profile.availability.toLowerCase()}.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white/70 p-5 dark:border-ink-800 dark:bg-ink-900/40"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent-500/0 blur-2xl transition group-hover:bg-accent-500/15"
                />
                <h3 className="font-display text-base font-semibold tracking-near-tight text-ink-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}
