import { motion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import IconRender from "@/components/IconRender";
import { expertise } from "@/data/expertise";

export default function Expertise() {
  return (
    <Section id="expertise" className="bg-ink-50/60 dark:bg-ink-950">
      <SectionHeading
        eyebrow="Core Expertise"
        title="Six pillars I bring to every engagement"
        subtitle="Each pillar is backed by shipped work — not a course completed last week."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {expertise.map((e) => (
          <motion.div
            key={e.title}
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 transition hover:border-ink-300 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:hover:border-ink-700"
            >
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-soft dark:bg-white dark:text-ink-950"
              >
                <IconRender name={e.icon} className="h-5 w-5" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold tracking-near-tight text-ink-900 dark:text-white">
                <span dangerouslySetInnerHTML={{ __html: e.title }} />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {e.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-200 px-2.5 py-1 text-[11px] text-ink-600 transition group-hover:border-ink-300 dark:border-ink-800 dark:text-ink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-500/10 blur-3xl transition group-hover:bg-accent-500/25"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
