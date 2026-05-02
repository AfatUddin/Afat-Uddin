import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types";
import CountUp from "@/components/CountUp";

export default function ProjectCard({ p }: { p: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 220, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 220, damping: 20, mass: 0.4 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-6deg", "6deg"]);
  const glareX = useTransform(sx, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["10%", "90%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]: string[]) =>
      `radial-gradient(280px circle at ${x} ${y}, rgba(255,255,255,0.12), transparent 60%)`,
  );

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white shadow-soft will-change-transform dark:border-ink-800/70 dark:bg-ink-900"
    >
      <Link to={`/projects/${p.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-100 dark:bg-ink-950">
          <motion.img
            src={p.cover}
            alt={`${p.name} cover`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-90" />
          <motion.div
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-700 backdrop-blur dark:bg-ink-950/70 dark:text-ink-200">
            {p.industry}
          </span>
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold text-white">
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
            {p.status}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-near-tight text-ink-900 dark:text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                {p.role} · {p.year}
              </p>
            </div>
            <motion.span
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-700 transition group-hover:border-ink-900 group-hover:bg-ink-900 group-hover:text-white dark:border-ink-800 dark:text-ink-200 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-ink-950"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </div>

          <p
            className="mt-4 text-sm leading-relaxed text-ink-700 dark:text-ink-300"
            dangerouslySetInnerHTML={{ __html: p.tagline }}
          />

          <div className="mt-5 grid grid-cols-2 gap-3">
            {p.metrics.slice(0, 4).map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-ink-100 bg-ink-50/60 p-3 dark:border-ink-800 dark:bg-ink-950/40"
              >
                <p className="font-display text-lg font-semibold tracking-tightest text-ink-900 dark:text-white">
                  <CountUp value={m.value} duration={1.4} />
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-ink-500 dark:text-ink-400">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.slice(0, 6).map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink-200 px-2.5 py-1 text-[11px] text-ink-600 dark:border-ink-800 dark:text-ink-300"
              >
                {s}
              </span>
            ))}
            {p.stack.length > 6 && (
              <span className="rounded-full px-2.5 py-1 text-[11px] text-ink-500 dark:text-ink-400">
                +{p.stack.length - 6} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
