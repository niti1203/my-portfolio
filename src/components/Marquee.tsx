"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MarqueeProps {
  texts: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function Marquee({
  texts,
  direction = "left",
  speed = 20,
}: MarqueeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [0, -100] : [-100, 0]
  );

  const repeated = [...texts, ...texts, ...texts, ...texts];

  return (
    <div ref={ref} className="overflow-hidden py-8 border-y border-border">
      <motion.div style={{ x }} className="flex gap-8 whitespace-nowrap">
        <div
          className="flex gap-8 animate-marquee"
          style={{ animationDuration: `${speed}s` }}
        >
          {repeated.map((text, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground/10 flex items-center gap-8"
            >
              {text}
              <span className="text-accent text-2xl">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
