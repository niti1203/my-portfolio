"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "Backend Systems",
    description: "Scalable, maintainable backend architecture using Java and Spring Boot. From microservices to monoliths, I design systems that perform under pressure and stay clean under the hood.",
    features: ["Spring Boot APIs", "Database Design", "Microservices", "System Architecture"],
    accent: "var(--accent)",
  },
  {
    num: "02",
    title: "Frontend Interfaces",
    description: "TypeScript-driven frontends with React and Next.js. I craft pixel-precise, responsive interfaces with fluid animations — because the way something feels matters as much as what it does.",
    features: ["React / Next.js", "TypeScript", "Motion Design", "Responsive UIs"],
    accent: "var(--accent-secondary)",
  },
  {
    num: "03",
    title: "Content & Brand",
    description: "Visual content strategy that cuts through noise. From Instagram posts to short-form reels, I shape brand narratives through design-forward content that connects and converts.",
    features: ["Content Strategy", "Social Media Design", "Reel Production", "Brand Voice"],
    accent: "var(--accent-tertiary)",
  },
  {
    num: "04",
    title: "End-to-End Solutions",
    description: "The rare ability to handle a project from database schema to brand identity. I bridge the gap between engineering, design, and strategy — delivering complete digital products.",
    features: ["Full-Stack Delivery", "Technical Consulting", "Design Direction", "Product Thinking"],
    accent: "var(--accent)",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 md:py-44 px-6 md:px-12 grid-bg grid-accent bg-transparent">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-accent text-sm font-mono">04</span>
          <span className="w-12 h-[1px] bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">What I Do</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted max-w-md text-lg"
          >
            Not a specialist in one thing — a strategist across all of it. Systems, surfaces, stories.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              data-hover="true"
              className={`relative border rounded-2xl p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden group ${
                activeIndex === i ? "border-accent/50 bg-accent/5" : "border-border"
              }`}
            >
              {/* Background number */}
              <span className="absolute -right-4 -top-8 text-[140px] font-black text-foreground/[0.02] leading-none select-none group-hover:text-accent/[0.06] transition-colors duration-500">
                {service.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-sm font-mono" style={{ color: service.accent }}>{service.num}</span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="group-hover:text-background transition-colors duration-500 group-hover:-rotate-45">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-muted leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="px-3 py-1.5 text-xs uppercase tracking-wider text-muted border border-border rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
