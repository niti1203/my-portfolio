"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "MoneyFlock",
    subtitle: "Freelance — Content & Brand",
    category: "Graphic Design",
    year: "2024",
    description:
      "Led content strategy and visual production for a fintech brand. Created social media posts, edited short-form reels, and built the brand's visual language using Canva. Instagram: @moneyflock_official",
    tech: ["Content Strategy", "Canva", "Reel Editing", "Brand Design"],
    color: "#ff2a5f",
  },
  {
    id: "02",
    title: "ReimburseEase",
    subtitle: "Full-Stack Web App",
    category: "Web Development",
    year: "2026",
    description:
      "A platform designed to streamline employee reimbursements. Features a vibrant, light-mode interface with pastel mesh gradients, high-contrast typography, and glassmorphic components.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/niti1203/reimburseease11",
    color: "#4a00ff",
  },
  {
    id: "03",
    title: "SaaS Dashboard",
    subtitle: "Frontend & Backend",
    category: "Web Development",
    year: "2025",
    description:
      "A comprehensive SaaS dashboard application featuring interactive data visualization, user management, and seamless backend integration.",
    tech: ["TypeScript", "Next.js", "Node.js"],
    github: "https://github.com/niti1203/Saas-Dashboard",
    color: "#ff6b00",
  },
  {
    id: "04",
    title: "Digital Time Capsule",
    subtitle: "Personal Project",
    category: "Web App",
    year: "2025",
    description:
      "An innovative web application that allows users to store digital memories, messages, and files to be unlocked at a specific future date.",
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/niti1203/Digital-Time-capsule-App",
    color: "#00c3ff",
  },
  {
    id: "05",
    title: "Enterprise Platform",
    subtitle: "Deloitte — Backend Architecture",
    category: "Backend System",
    year: "2025",
    description:
      "Architected scalable backend services using Spring Boot and microservices patterns. Built REST APIs, designed database schemas, and implemented enterprise-grade solutions.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    color: "#00b894",
  },
  {
    id: "06",
    title: "Portfolio V2",
    subtitle: "Personal — Full-Stack Creative",
    category: "Web Development",
    year: "2025",
    description:
      "This portfolio — a hand-crafted Next.js experience with expressive typography, scroll-driven animations, and a design language that bridges engineering and creativity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/niti1203/portfolio",
    color: "#fd79a8",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-44 px-6 md:px-12 grid-bg grid-tertiary bg-transparent">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-accent text-sm font-mono">02</span>
          <span className="w-12 h-[1px] bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Selected Work</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
          >
            <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted max-w-md text-lg"
          >
            From enterprise backends to brand content — work spanning systems, interfaces, and storytelling.
          </motion.p>
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-t border-border last:border-b cursor-pointer"
              data-hover="true"
            >
              <div className="relative py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-sm font-mono text-muted md:w-16 shrink-0">{project.id}</span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mt-1 md:hidden">{project.subtitle}</p>
                </div>
                <span className="hidden md:block text-sm text-muted uppercase tracking-wider md:w-48">{project.category}</span>
                <span className="hidden md:block text-sm font-mono text-muted md:w-20">{project.year}</span>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-background transition-colors duration-500 group-hover:-rotate-45">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: hoveredIndex === i ? "auto" : 0, opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="pb-8 md:pb-12 md:pl-24 grid md:grid-cols-2 gap-6">
                  <p className="text-muted leading-relaxed">{project.description}</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 text-xs uppercase tracking-wider rounded-full border border-border text-muted">{t}</span>
                      ))}
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:underline w-fit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ backgroundColor: project.color }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a href="https://github.com/niti1203" target="_blank" rel="noopener noreferrer" data-hover="true" className="group flex items-center gap-4 text-lg uppercase tracking-wider text-muted hover:text-accent transition-colors duration-300">
            <span>View All Projects on GitHub</span>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
