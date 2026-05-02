import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import IconRender from "@/components/IconRender";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="What I deliver, end to end"
        subtitle="Senior backend leadership for AI products — from blank repo to billed feature."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="mt-14 grid gap-5 md:grid-cols-2"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-b from-white to-ink-50 p-7 transition hover:shadow-soft dark:border-ink-800 dark:from-ink-900 dark:to-ink-950"
          >
            <motion.div
              aria-hidden
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-[length:200%_200%] bg-gradient-to-r from-accent-500/0 via-accent-500/20 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="flex items-start justify-between gap-4">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-soft dark:bg-white dark:text-ink-950"
              >
                <IconRender name={s.icon} className="h-5 w-5" />
              </motion.div>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">
                0{i + 1}
              </span>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold tracking-near-tight text-ink-900 dark:text-white">
              <span dangerouslySetInnerHTML={{ __html: s.title }} />
            </h3>
            <p
              className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300"
              dangerouslySetInnerHTML={{ __html: s.pitch }}
            />

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
              }}
              className="mt-5 space-y-2.5 text-sm"
            >
              {s.bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex items-start gap-2.5 text-ink-700 dark:text-ink-300"
                >
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-accent-500/10 text-accent-500">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>

      <Reveal className="mt-14">
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="relative overflow-hidden rounded-3xl border border-ink-200 bg-ink-950 p-10 text-white dark:border-ink-800"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -z-10 bg-[length:200%_200%] bg-gradient-to-tr from-accent-700/40 via-accent-500/20 to-gold/30"
          />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Engagement
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-near-tight sm:text-3xl">
                Most projects start with a 60-minute scoping call &amp; a fixed-price first milestone.
              </h3>
              <p className="mt-3 text-sm text-white/80">
                You leave the call with an architecture sketch, a milestone plan, and a clear answer on whether I&rsquo;m the right fit — even if the answer is no.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              Book the call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </Reveal>
    </Section>
  );
}
