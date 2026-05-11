"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;   // e.g. "30%+", "2×", "50%", "1.3B+"
  label: string;
  delay?: number;
}

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export default function AnimatedStat({ value, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        step++;
        current = Math.min(current + increment, num);
        const formatted =
          num % 1 !== 0 ? current.toFixed(1) : Math.round(current).toString();
        setDisplay(formatted);
        if (step >= steps) clearInterval(interval);
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, num, delay]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-3xl sm:text-4xl font-extrabold gradient-text leading-none">
        {display}{suffix}
      </span>
      <span className="text-sm text-naya-muted mt-1">{label}</span>
    </div>
  );
}
