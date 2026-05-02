import { motion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { skillGroups } from "@/data/skills";

const HIGHLIGHT_TAGS = [
  "Google Gemini",
  "OpenAI",
  "Replicate",
  "LangChain",
  "RAG",
  "pgvector",
  "BGE Embeddings",
  "Django",
  "DRF",
  "FastAPI",
  "Celery",
  "Redis",
  "PostgreSQL",
  "Stripe",
  "Azure",
  "Docker",
  "Sentry",
  "Prometheus",
];

export default function Skills() {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="Stack"
        title="The toolbox behind the work"
        subtitle="Every tool below has shipped to production on a system I own — not a tutorial."
      />

      <Reveal className="mt-14">
        <Marquee speed={42} className="py-2">
          {HIGHLIGHT_TAGS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-200 bg-white px-5 py-2 text-sm font-medium text-ink-700 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </Reveal>

      <Reveal className="mt-3">
        <Marquee speed={50} reverse className="py-2">
          {[...HIGHLIGHT_TAGS].reverse().map((t) => (
            <span
              key={`r-${t}`}
              className="rounded-full border border-ink-200/60 bg-gradient-to-r from-accent-500/10 to-gold/10 px-5 py-2 text-sm font-medium text-ink-700 dark:border-ink-800/60 dark:text-ink-200"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07 } },
        }}
        className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((g) => (
          <motion.div
            key={g.title}
            variants={{
              hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -4 }}
            className="h-full rounded-3xl border border-ink-200 bg-white p-7 transition dark:border-ink-800 dark:bg-ink-900"
          >
            <h3 className="font-display text-base font-semibold tracking-near-tight text-ink-900 dark:text-white">
              <span dangerouslySetInnerHTML={{ __html: g.title }} />
            </h3>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.025 } },
              }}
              className="mt-5 flex flex-wrap gap-1.5"
            >
              {g.items.map((it) => (
                <motion.li
                  key={it}
                  variants={{
                    hidden: { opacity: 0, y: 8, scale: 0.9 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="rounded-full border border-ink-200 bg-ink-50/60 px-3 py-1.5 text-[12px] text-ink-700 transition hover:border-ink-300 hover:bg-white dark:border-ink-800 dark:bg-ink-950/60 dark:text-ink-200 dark:hover:border-ink-700"
                >
                  {it}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
