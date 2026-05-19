"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "./ui/CountUp";
import ModelViewer from "./ModelViewer";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });


  const stats = [
    { value: 1, label: "Years Experience", suffix: "+" },
    { value: 10, label: "Projects Completed", suffix: "+" },
    { value: 2, label: "Brand Stories", suffix: "" },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent grid-bg grid-accent"
    >
      {/* Background Model Viewer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full opacity-40">
          <ModelViewer 
            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb" 
            width="100%" 
            height="100%" 
            showScreenshotButton={false}
            enableManualZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            environmentPreset="city"
            ambientIntensity={0.5}
          />
        </div>
      </div>


      {/* Main Typography - NITIKA */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full overflow-hidden"
        >
          <h1 className="text-[clamp(8rem,25vw,60rem)] font-black leading-[0.7] tracking-[-0.08em] text-center uppercase select-none text-foreground/90 scale-y-[1.4] origin-center">
            NITIKA
          </h1>
        </motion.div>

        {/* Stats Section Integrated with CountUp */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-12 mt-24"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-black text-foreground flex items-baseline">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2.5}
                  delay={1.2 + (idx * 0.2)}
                />
                <span className="ml-1">{stat.suffix}</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-2 font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Creative Colouring Accents */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px]" />
        </div>
      </div>

      {/* Subtext Reveal on Scroll */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-muted font-mono animate-pulse">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}
