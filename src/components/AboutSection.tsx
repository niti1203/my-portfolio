"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Stepper, { Step } from "./Stepper";

const disciplines = [
  {
    icon: "⚙",
    title: "Full-Stack Development",
    description: "Architecting scalable systems from Spring Boot microservices to polished React frontends.",
    tags: ["Java", "Spring Boot", "React", "Next.js"],
  },
  {
    icon: "✦",
    title: "Graphic Design",
    description: "Crafting visual narratives that convert — from brand strategy to high-impact content.",
    tags: ["Canva", "Brand Design", "Content Strategy"],
  },
];

const milestones = [
  { value: "Deloitte", label: "Current Role", sublabel: "Analyst" },
  { value: "Thapar", label: "B.Tech", sublabel: "2022 – 2026" },
  { value: "Full-Stack", label: "Approach", sublabel: "End-to-End" },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-24 md:py-32 px-6 md:px-12 graph-paper-pink overflow-hidden noise-texture min-height-[800px]"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-accent-tertiary text-sm font-mono font-bold tracking-widest">01</span>
          <span className="w-16 h-[2px] bg-accent/40" />
          <span className="text-xs uppercase font-black tracking-[0.4em] text-muted/70">About Me</span>
        </motion.div>

        <div className="flex flex-col items-center">
          <Stepper initialStep={1}>
            {/* Step 1: Identity */}
            <Step>
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                  Built to <span className="text-gradient">Design</span> & Develop
                </h2>
                <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                  I&apos;m <span className="text-foreground font-bold underline decoration-accent/30 underline-offset-4">Nitika</span> — 
                  a creative technologist bridging the gap between technical rigor and visual excellence.
                </p>
              </div>
            </Step>

            {/* Step 2: Experience */}
            <Step>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl font-bold">D</div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Deloitte Analyst</h3>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  I operate in complex enterprise landscapes where precision and reliability are the baseline. 
                  My role involves architecting solutions that prioritize scale and user experience.
                </p>
                <div className="flex gap-4">
                  {milestones.slice(0, 1).map((m) => (
                    <div key={m.label} className="bg-white/40 p-4 rounded-xl border border-accent/10 flex-1">
                      <div className="text-2xl font-black text-accent">{m.value}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Step>

            {/* Step 3: Education & Milestones */}
            <Step>
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-center">Foundation & Milestones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {milestones.slice(1).map((m) => (
                    <div key={m.label} className="bg-white/40 p-6 rounded-2xl border border-border/50 hover:border-accent/20 transition-colors">
                      <div className="text-3xl font-black text-foreground mb-1">{m.value}</div>
                      <div className="text-xs uppercase font-bold tracking-wider text-muted/60">{m.label}</div>
                      <div className="text-[10px] font-mono mt-2 text-muted/40">{m.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Step>

            {/* Step 4: Disciplines */}
            <Step>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {disciplines.map((d) => (
                    <div key={d.title} className="group p-6 rounded-2xl bg-white/40 border border-border/50 hover:border-accent/20 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{d.icon}</span>
                        <h4 className="font-black uppercase tracking-tight text-sm">{d.title}</h4>
                      </div>
                      <p className="text-xs text-muted leading-relaxed mb-4">{d.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {d.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>

      {/* Decorative Stamp kept but smaller */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.02] select-none pointer-events-none rotate-90">
        <span className="text-[12rem] font-black leading-none uppercase tracking-tighter">
          NITIKA
        </span>
      </div>
    </section>
  );
}