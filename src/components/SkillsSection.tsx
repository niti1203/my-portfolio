"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./ui/CountUp";

const skillCategories = [
  {
    title: "Backend",
    icon: "⚙",
    accent: "#ff0077", // Deep Pink
    description: "Building resilient microservices and data-driven architectures.",
    skills: [
      { name: "Java / Spring Boot", level: 92 },
      { name: "REST API Design", level: 90 },
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "Microservices", level: 82 },
      { name: "Docker / Cloud", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: "◈",
    accent: "#ff8800", // Vibrant Orange
    description: "Crafting immersive interfaces with motion and logic.",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "React / Next.js", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 85 },
      { name: "Responsive UI", level: 90 },
    ],
  },
  {
    title: "Creative",
    icon: "✦",
    accent: "#7000ff", // Electric Purple
    description: "Strategic storytelling and high-impact visual design.",
    skills: [
      { name: "Content Strategy", level: 88 },
      { name: "Visual Design", level: 85 },
      { name: "Reel Editing", level: 80 },
      { name: "Brand Stories", level: 82 },
      { name: "UI/UX", level: 78 },
    ],
  },
];

const tools = [
  "Java", "Spring Boot", "TypeScript", "React", "Next.js",
  "Tailwind", "Framer", "Postgres", "Docker",
  "Git", "Canva", "Figma", "Vercel", "REST", "Node.js",
  "MongoDB",
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 md:py-56 px-6 md:px-12 graph-paper-yellow overflow-hidden noise-texture">
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="text-[20rem] font-black leading-none uppercase tracking-tighter">
          SKILLS
        </span>
      </div>

      <div ref={ref} className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="text-accent-tertiary text-sm font-mono font-bold tracking-widest">03</span>
          <span className="w-16 h-[2px] bg-accent-tertiary/40" />
          <span className="text-xs uppercase font-black tracking-[0.4em] text-foreground/60">Expertise</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-24 gap-10">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]"
            >
              Mastering the 
              <br />
              <span className="text-gradient">Arsenal</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/80 max-w-md text-xl font-medium leading-tight"
          >
            Technical precision meets creative instinct. Three domains, one unified approach to digital excellence.
          </motion.p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-32 perspective-1000">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + ci * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -15, rotateY: 5, rotateX: -2 }}
              className="relative rounded-[2.5rem] p-10 lg:p-12 glass-card transition-all duration-700 group hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
              style={{ borderTop: `4px solid ${category.accent}` }}
            >
              {/* Inner Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10"
                style={{ background: `radial-gradient(circle at center, ${category.accent}, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: `${category.accent}15`, color: category.accent }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none">{category.title}</h3>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-muted mt-1">Specialization</div>
                  </div>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-10 h-10">{category.description}</p>
                
                <div className="space-y-8">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-black uppercase tracking-wider text-foreground/80">{skill.name}</span>
                        <span className="text-[10px] font-mono font-bold" style={{ color: category.accent }}>
                          <CountUp
                            from={0}
                            to={skill.level}
                            duration={2.5}
                            startWhen={isInView}
                          />
                          %
                        </span>
                      </div>
                      {/* Premium Progress Bar */}
                      <div className="h-[3px] bg-foreground/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.6 + ci * 0.1 + si * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.accent}, ${category.accent}99)`,
                            boxShadow: `0 0 10px ${category.accent}30`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Tools Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative py-20 px-10 rounded-[3rem] border border-foreground/5 bg-white/10 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-tertiary/5 opacity-30" />
          
          <h3 className="text-xs uppercase font-black tracking-[0.5em] text-foreground/40 mb-12 text-center relative z-10">Stack & Infrastructure</h3>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.8)', borderColor: 'rgba(0,0,0,0.1)' }}
                className="px-6 py-3 text-xs font-black uppercase tracking-widest border border-foreground/10 rounded-xl text-foreground/70 transition-all duration-300 cursor-default shadow-sm bg-white/40"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-tertiary/5 blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] -z-10" />
    </section>
  );
}
