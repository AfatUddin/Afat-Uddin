import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-ink-50/60 dark:bg-ink-950">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you ask"
          subtitle="If your question isn&rsquo;t below, drop me a line — I reply within a business day."
        />

        <Reveal>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
            className="divide-y divide-ink-200 overflow-hidden rounded-3xl border border-ink-200 bg-white dark:divide-ink-800 dark:border-ink-800 dark:bg-ink-900"
          >
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.li
                  key={f.q}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-ink-50 dark:hover:bg-ink-950/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold tracking-near-tight text-ink-900 dark:text-white">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.05 : 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                      className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-ink-200 transition dark:border-ink-700 ${
                        isOpen
                          ? "bg-ink-900 text-white dark:bg-white dark:text-ink-950"
                          : "text-ink-700 dark:text-ink-300"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -4 }}
                          animate={{ y: 0 }}
                          exit={{ y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
                        >
                          {f.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </Reveal>
      </div>
    </Section>
  );
}
