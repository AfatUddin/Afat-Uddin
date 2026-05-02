import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
  scale?: boolean;
};

export default function Parallax({
  children,
  speed = 30,
  className,
  scale = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const sRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 22, mass: 0.4 });
  const s = useSpring(sRaw, { stiffness: 80, damping: 22, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={scale ? { y, scale: s } : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
