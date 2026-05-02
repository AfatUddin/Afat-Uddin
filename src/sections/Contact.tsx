import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const TOPICS = [
  "Generative AI Engineering",
  "RAG / Semantic Search",
  "AI Chatbot",
  "Backend / SaaS Build",
  "AI Performance &amp; Cost",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const subject = encodeURIComponent("Project enquiry — via afatuddin.com");
  const body = encodeURIComponent(
    `Hi Afat,\n\nProject scope:\n- \n\nTimeline:\n- \n\nBudget range:\n- \n\nLinks (repo / docs / current product):\n- \n\nThanks!`,
  );
  const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-ink-200 bg-gradient-to-br from-white via-ink-50 to-white p-8 shadow-soft dark:border-ink-800 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900 sm:p-14">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="section-eyebrow">Contact</span>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-[1.05] tracking-tightest text-ink-900 dark:text-white sm:text-5xl">
              <span className="gradient-text">Let&rsquo;s build the AI feature</span>{" "}
              <span className="accent-text">your roadmap actually needs.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-600 dark:text-ink-300">
              Whether you&rsquo;re a startup founder shipping your first AI feature, an agency that needs senior backend muscle, or a recruiter for a senior GenAI role — write to me with the problem, your stack, and a rough timeline.
            </p>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {TOPICS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-200 bg-white/70 px-3 py-1.5 text-xs text-ink-700 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200"
                  dangerouslySetInnerHTML={{ __html: t }}
                />
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <a
                href={mailto}
                className="group flex items-center justify-between rounded-2xl border border-ink-200 bg-white p-4 transition hover:border-ink-300 dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-white dark:bg-white dark:text-ink-950">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                      Email
                    </span>
                    <span className="block text-sm font-medium text-ink-900 dark:text-white">
                      {profile.email}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-400 transition group-hover:text-ink-900 dark:group-hover:text-white" />
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between rounded-2xl border border-ink-200 bg-white p-4 transition hover:border-ink-300 dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 text-white dark:bg-white dark:text-ink-950">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                      Phone / WhatsApp
                    </span>
                    <span className="block text-sm font-medium text-ink-900 dark:text-white">
                      {profile.phone}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-400 transition group-hover:text-ink-900 dark:group-hover:text-white" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-200 bg-white/80 p-6 backdrop-blur dark:border-ink-800 dark:bg-ink-900/60 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                Fastest path
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-near-tight text-ink-900 dark:text-white">
                Send me a structured email
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                The button below opens your email client with a short brief template — fill in scope, timeline, budget range, and any links. I respond within one business day.
              </p>

              <div className="mt-7 grid gap-3">
                <a href={mailto} className="btn-primary w-full !rounded-2xl">
                  Compose project email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="btn-ghost w-full !rounded-2xl"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied to clipboard
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy email address
                    </>
                  )}
                </button>
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-700 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
                >
                  Download CV (PDF)
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-7 text-xs text-ink-500 dark:text-ink-500">
                Prefer LinkedIn? Use the link in the footer — same response time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
