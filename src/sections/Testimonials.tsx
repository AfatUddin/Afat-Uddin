import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Trust"
        title="What collaborators say"
        subtitle="Sample feedback from peers and product partners. Full references available on request."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        className="mt-14 grid gap-5 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.figure
            key={t.name + t.company}
            variants={{
              hidden: { opacity: 0, y: 30, rotate: -1.5, filter: "blur(8px)" },
              show: {
                opacity: 1,
                y: 0,
                rotate: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -6, rotate: 0.4 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-soft dark:border-ink-800 dark:bg-ink-900"
          >
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/10 blur-3xl transition group-hover:bg-accent-500/25"
            />
            <Quote className="h-6 w-6 text-accent-500" />
            <blockquote className="mt-4 text-sm leading-relaxed text-ink-800 dark:text-ink-200">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-ink-100 pt-4 text-xs dark:border-ink-800">
              <p className="font-semibold text-ink-900 dark:text-white">{t.name}</p>
              <p className="mt-0.5 text-ink-500 dark:text-ink-400">
                {t.role} · {t.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}
