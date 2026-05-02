import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: string;
  duration?: number;
  className?: string;
};

const NUM_RE = /([+\-−]?\d+(?:[.,]\d+)?)/;

export default function CountUp({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    const m = value.match(NUM_RE);
    if (!m) {
      setDisplay(value);
      return;
    }
    started.current = true;

    const numStr = m[1].replace(",", ".");
    const target = parseFloat(numStr.replace("−", "-"));
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const before = value.slice(0, m.index ?? 0);
    const after = value.slice((m.index ?? 0) + m[1].length);
    const start = target < 0 ? 0 : 0;

    const controls = animate(start, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const fixed = v.toFixed(decimals);
        const sign = target < 0 ? (m[1].startsWith("−") ? "−" : "-") : "";
        const out = `${before}${sign}${Math.abs(parseFloat(fixed)).toFixed(decimals)}${after}`;
        setDisplay(out);
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
