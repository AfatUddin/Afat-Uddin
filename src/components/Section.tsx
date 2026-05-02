import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
};

export default function Section({ id, children, className, bleed = false }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        bleed ? "py-0" : "py-24 sm:py-28 md:py-32",
        className,
      )}
    >
      {!bleed && <div className="container-wide">{children}</div>}
      {bleed && children}
    </section>
  );
}
