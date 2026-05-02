import { useScroll, useTransform, motion } from "framer-motion";

type Props = {
  density?: "low" | "high";
  className?: string;
};

export default function Orbs({ density = "low", className }: Props) {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const high = density === "high";

  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <motion.div
        style={{ y: y1, rotate: r1 }}
        className="absolute -left-32 top-[10%] h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-[120px] dark:bg-accent-500/30"
      />
      <motion.div
        style={{ y: y2, rotate: r2 }}
        className="absolute -right-40 top-[40%] h-[480px] w-[480px] rounded-full bg-gold/15 blur-[140px] dark:bg-gold/25"
      />
      {high && (
        <motion.div
          style={{ y: y3 }}
          className="absolute left-[40%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-fuchsia-400/10 blur-[120px] dark:bg-fuchsia-400/20"
        />
      )}
    </div>
  );
}
