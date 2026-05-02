import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center px-5 py-32">
      <div className="absolute inset-0 -z-10 mesh opacity-60" />
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
          404 · Off the map
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tightest text-ink-900 dark:text-white sm:text-7xl">
          <span className="gradient-text">Page not found.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-600 dark:text-ink-300">
          The link is dead, the slug changed, or you found a bug. Either way — head home and let&rsquo;s get you somewhere useful.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
