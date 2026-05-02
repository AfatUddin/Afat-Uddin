import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-tightest sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
