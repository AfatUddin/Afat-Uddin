import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 80, damping: 22, mass: 0.4 },
  );

  return (
    <Section id="experience" className="bg-ink-50/60 dark:bg-ink-950">
      <SectionHeading
        eyebrow="Career"
        title="Where I&rsquo;ve done the work"
        subtitle="Three years across two companies — both spent shipping production backend systems."
      />

      <div className="relative mt-14">
        <div className="absolute left-3 top-0 h-full w-px bg-ink-200 sm:left-5 dark:bg-ink-800" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 top-0 w-px origin-top bg-gradient-to-b from-accent-500 via-accent-400 to-gold sm:left-5"
          aria-hidden
        />
        <ol ref={ref} className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.company + e.period} delay={i * 0.05}>
              <li className="relative pl-12 sm:pl-16">
                <motion.span
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200 sm:h-10 sm:w-10"
                >
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </motion.span>

                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="rounded-3xl border border-ink-200 bg-white p-6 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:p-8"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-near-tight text-ink-900 dark:text-white">
                        {e.role}
                      </h3>
                      <p className="text-sm font-medium text-ink-600 dark:text-ink-300">
                        {e.company} · {e.location}
                      </p>
                    </div>
                    <span className="pill">{e.period}</span>
                  </div>

                  <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                    }}
                    className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-700 dark:text-ink-300"
                  >
                    {e.bullets.map((b) => (
                      <motion.li
                        key={b}
                        variants={{
                          hidden: { opacity: 0, x: -16 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
