"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative border-t border-border">
      {/* Big CTA Banner */}
      <div className="py-20 md:py-32 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted mb-6">
            Ready to start a project?
          </p>
          <a
            href="#contact"
            data-hover="true"
            className="inline-block text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-foreground hover:text-accent transition-colors duration-500"
          >
            SAY HELLO
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 md:px-12 py-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="text-accent">●</span>
            <span>© 2025 Nitika. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { name: "GitHub", href: "https://github.com/niti1203" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/nitika-0245b6251/" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover="true"
                className="text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300"
              >
                {s.name}
              </a>
            ))}
          </div>

          <a
            href="#hero"
            data-hover="true"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors duration-300"
          >
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M12 5L5 12M12 5L19 12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
