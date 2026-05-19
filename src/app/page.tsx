"use client";

import CustomCursor from "@/components/CustomCursor";

import LogoLoop from "@/components/LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSpringboot,
  SiPostgresql, SiDocker, SiFramer, SiFigma, SiNodedotjs, SiMongodb
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cubes from "@/components/Cubes/Cubes";
import Folder from "@/components/Folder/Folder";
import { useRef } from "react";

const techLogos = [
  { node: <FaJava />, title: "Java" },
  { node: <SiSpringboot />, title: "Spring Boot" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiFramer />, title: "Framer Motion" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiMongodb />, title: "MongoDB" },
];

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="mesh-bg" />
      <Preloader />
      <CustomCursor />

      <Navbar />
      <main ref={contentRef} className="relative">
        <HeroSection />
        <div className="py-10 border-y border-foreground/5 bg-surface/5 backdrop-blur-sm">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={60}
            fadeOut
            fadeOutColor="var(--background)"
            scaleOnHover
          />
        </div>
        <AboutSection />
        <div className="py-10 border-y border-foreground/5 bg-surface/5 backdrop-blur-sm">
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="right"
            logoHeight={40}
            gap={60}
            fadeOut
            fadeOutColor="var(--background)"
            scaleOnHover
          />
        </div>
        <section className="relative w-full h-[70vh] min-h-[600px] max-h-[900px] flex justify-center items-center overflow-hidden bg-surface/5 backdrop-blur-sm border-y border-border/5">
          <div className="absolute inset-0 graph-paper-pink opacity-10 pointer-events-none" />

          {/* Centered Content Container */}
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Folder Overlay - Centered exactly over the grid hole */}
            <div className="absolute z-30 pointer-events-auto flex justify-center items-center">
              <Folder
                size={1.5}
                color="var(--accent-tertiary)"
                items={[
                  <img key="1" src="/assets/folder-item-1.png" alt="Wine Tour" className="w-full h-full object-cover" />,
                  <img key="2" src="/assets/folder-item-2.png" alt="MoneyFlock 1" className="w-full h-full object-cover" />,
                  <img key="3" src="/assets/folder-item-3.png" alt="MoneyFlock 2" className="w-full h-full object-cover" />
                ]}
              />
            </div>

            {/* Full Alignment Cubes Grid */}
            <div className="w-full h-full relative z-10">
              <Cubes
                gridSize={15}
                maxAngle={45}
                radius={5}
                borderStyle="1px solid var(--accent-tertiary)"
                faceColor="#1a1a1a"
                rippleColor="var(--accent)"
                rippleSpeed={2.5}
                autoAnimate={true}
                rippleOnClick={true}
                cellGap={10}
              />
            </div>
          </div>
        </section>
        <ProjectsSection />
        <SkillsSection />
        <div className="py-10 border-y border-foreground/5 bg-surface/5 backdrop-blur-sm">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={40}
            gap={60}
            fadeOut
            fadeOutColor="var(--background)"
            scaleOnHover
          />
        </div>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
