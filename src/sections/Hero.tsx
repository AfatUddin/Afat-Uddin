import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import CountUp from "@/components/CountUp";

const STATS = [
  { v: "3+", k: "Years shipping production AI" },
  { v: "20+", k: "AI feature apps in production" },
  { v: "−80%", k: "Async pipeline latency cut" },
  { v: "Multi-tenant", k: "SaaS by default" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgRot = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36 md:pb-36 md:pt-40"
    >
      <motion.div style={{ y: meshY }} className="absolute inset-0 -z-10 mesh" />
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[length:24px_24px] opacity-40 dark:bg-grid-dark dark:opacity-30 mask-fade-b" />

      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pill"
            >
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Generative AI · RAG · LLM Systems
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-tightest text-ink-950 dark:text-white sm:text-6xl md:text-7xl"
            >
              <HeroLine className="gradient-text">Generative AI,</HeroLine>
              <br />
              <HeroLine className="accent-text">engineered for production.</HeroLine>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-700 dark:text-ink-300"
            >
              I&rsquo;m {profile.name} — a Generative AI Engineer who ships RAG pipelines, LLM-powered SaaS, and AI integrations that are tenant-aware, cost-aware, and production-tested. No demos. No glue code. Just systems that work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary group">
                <span>Start a project</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="btn-ghost">
                See the work
              </a>
              <a
                href={profile.cvUrl}
                download
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                CV (PDF)
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-10 flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400"
            >
              <MapPin className="h-4 w-4" />
              {profile.location}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imgY, rotate: imgRot }}
            className="relative mx-auto w-full max-w-md"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-accent-500/35 via-fuchsia-400/25 to-gold/35 blur-3xl"
            />
            <div className="glass-card overflow-hidden rounded-[2rem] p-2">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-ink-100 to-white dark:from-ink-900 dark:to-ink-950">
                <motion.img
                  src={profile.avatar}
                  alt={`${profile.name} portrait`}
                  className="h-[460px] w-full object-cover object-center sm:h-[520px]"
                  loading="eager"
                  fetchPriority="high"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Currently
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold leading-snug">
                    Software Engineer · CodefusionAI
                  </p>
                  <p className="text-sm text-white/80">
                    Generative AI · RAG · Multi-tenant SaaS
                  </p>
                </div>
              </div>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute -left-6 bottom-10 hidden items-center gap-2 rounded-2xl border border-ink-200 bg-white px-3 py-2 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:flex"
            >
              <span className="grid h-7 w-7 place-items-center rounded-xl bg-accent-500/10 text-accent-500">
                <span className="text-[13px] font-bold">⌘</span>
              </span>
              <span className="text-xs font-medium text-ink-700 dark:text-ink-200">
                Gemini · LangChain · pgvector
              </span>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-3 top-10 hidden rounded-2xl border border-ink-200 bg-white px-3 py-2 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                Response time
              </p>
              <p className="mt-0.5 font-display text-sm font-semibold text-ink-900 dark:text-white">
                &lt; 24h
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.06 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white/70 p-5 backdrop-blur dark:border-ink-800 dark:bg-ink-900/60"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:from-accent-500/10 group-hover:to-gold/10 group-hover:opacity-100" />
              <p className="font-display text-2xl font-semibold tracking-tightest text-ink-900 dark:text-white sm:text-3xl">
                <CountUp value={s.v} />
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
                {s.k}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className="relative inline-block overflow-hidden pb-[0.04em] align-bottom">
      <motion.span
        variants={{
          hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
          show: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className={`inline-block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
