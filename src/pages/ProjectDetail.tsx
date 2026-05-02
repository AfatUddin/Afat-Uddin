import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { projectBySlug, projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? projectBySlug(slug) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — case study · ${profile.name}`;
    }
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];

  return (
    <article className="pb-24 pt-28 sm:pt-32">
      <div className="container-wide">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="section-eyebrow">{project.industry}</span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-ink-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="gradient-text">{project.name}</span>
            </h1>
            <p
              className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700 dark:text-ink-300"
              dangerouslySetInnerHTML={{ __html: project.tagline }}
            />
            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-4 py-2 text-sm font-medium text-ink-800 backdrop-blur transition hover:border-ink-300 hover:text-ink-950 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200 dark:hover:border-ink-700 dark:hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
            <Meta label="Status" value={project.status} />
            <Meta label="Industry" value={project.industry} />
          </dl>
        </header>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-ink-200 bg-ink-100 shadow-soft dark:border-ink-800 dark:bg-ink-950">
            <img
              src={project.cover}
              alt={`${project.name} cover`}
              className="h-auto w-full"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </Reveal>
      </div>

      <Section className="!py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {project.metrics.map((m) => (
            <motion.div
              key={m.label}
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
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/0 blur-2xl transition group-hover:bg-accent-500/15" />
              <p className="font-display text-3xl font-semibold tracking-tightest text-ink-900 dark:text-white">
                <CountUp value={m.value} />
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                {m.label}
              </p>
              {m.hint && (
                <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">{m.hint}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white sm:text-3xl">
              The problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-ink-300">
              {project.problem}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white sm:text-3xl">
              The AI solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700 dark:text-ink-300">
              {project.solution}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white sm:text-3xl">
            What made it different
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {project.innovation.map((point, i) => (
            <Reveal key={point} delay={i * 0.04}>
              <div className="flex h-full gap-4 rounded-3xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-2xl bg-accent-500/10 text-accent-500">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white sm:text-3xl">
            Process
          </h2>
        </Reveal>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <li className="h-full rounded-3xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-base font-semibold tracking-near-tight text-ink-900 dark:text-white">
                  <span dangerouslySetInnerHTML={{ __html: step.title }} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {project.gallery.length > 0 && (
        <Section className="!pt-0">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white sm:text-3xl">
              Selected screens
            </h2>
            <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
              Live UI from the platform — frontend by the product team, backend by me.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.05 }}
                className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-100 dark:border-ink-800 dark:bg-ink-950"
              >
                <img
                  src={src}
                  alt={`${project.name} screen ${i + 1}`}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white sm:text-3xl">
              Outcomes
            </h2>
            <ul className="mt-6 space-y-3">
              {project.outcomes.map((o) => (
                <li
                  key={o}
                  className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-ink-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-ink-200 bg-ink-50 p-6 dark:border-ink-800 dark:bg-ink-950">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                Client value
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-800 dark:text-ink-200">
                {project.clientValue}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-ink-200 bg-white p-7 dark:border-ink-800 dark:bg-ink-900">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                Tech stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-ink-200 bg-ink-50/60 px-3 py-1.5 text-[12px] text-ink-700 dark:border-ink-800 dark:bg-ink-950/60 dark:text-ink-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                Highlights
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-700 dark:text-ink-300">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink-200 bg-ink-950 p-10 text-white shadow-soft dark:border-ink-800 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Up next
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-near-tight">
              {next.name}
            </h3>
            <p
              className="mt-1 max-w-lg text-sm text-white/70"
              dangerouslySetInnerHTML={{ __html: next.tagline }}
            />
          </div>
          <Link
            to={`/projects/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
          >
            Read case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-ink-900 dark:text-white">{value}</dd>
    </div>
  );
}
