import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const ICONS = { Mail, Github, Linkedin, Youtube } as const;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-200 bg-white py-14 dark:border-ink-900 dark:bg-ink-950">
      <div className="container-wide grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink-900 text-[13px] font-bold text-white dark:bg-white dark:text-ink-950">
              {profile.initials}
            </span>
            <span>{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-ink-600 dark:text-ink-400">
            {profile.title}. Building production Generative AI for teams that ship.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {profile.socials.map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-ink-700 transition hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
            Get in touch
          </p>
          <p className="mt-4 text-sm text-ink-700 dark:text-ink-300">{profile.location}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-1 block text-sm font-semibold text-ink-900 underline-offset-4 hover:underline dark:text-white"
          >
            {profile.email}
          </a>
          <a
            href={profile.cvUrl}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-xs font-semibold text-ink-700 transition hover:border-ink-300 dark:border-ink-800 dark:text-ink-200"
            download
          >
            Download CV (PDF)
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="container-wide mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-500 dark:border-ink-900 dark:text-ink-500 sm:flex-row sm:items-center">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p>Crafted with React, Tailwind, and a lot of late-night espresso.</p>
      </div>
    </footer>
  );
}
