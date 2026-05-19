"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { name: "GitHub", href: "https://github.com/niti1203" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nitika-0245b6251/" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 graph-paper-yellow">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-accent text-sm font-mono">05</span>
          <span className="w-12 h-[1px] bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-foreground font-bold">Get In Touch</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-8"
            >
              Let&apos;s
              <br />
              <span className="text-gradient">work</span>
              <br />
              together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-foreground/80 max-w-md mb-10 font-medium"
            >
              Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and creative ideas.
            </motion.p>

            {/* Email link */}
            <motion.a
              href="mailto:nitiwork90@gmail.com"
              data-hover="true"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-accent hover:text-foreground transition-colors duration-300 group mb-12"
            >
              nitiwork90@gmail.com
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover="true"
                  className="px-5 py-2.5 text-sm uppercase tracking-wider border border-foreground/30 rounded-full text-foreground/70 hover:text-accent hover:border-accent transition-all duration-300 font-bold"
                >
                  {s.name}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 lg:pt-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-foreground font-black mb-3">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-foreground/40 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-foreground font-black mb-3">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-b-2 border-foreground/40 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs uppercase tracking-[0.2em] text-foreground font-black mb-3">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Project Inquiry"
                className="w-full bg-transparent border-b-2 border-foreground/40 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-foreground font-black mb-3">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b-2 border-foreground/40 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              data-hover="true"
              className="group w-full sm:w-auto px-10 py-4 bg-accent text-background font-bold uppercase tracking-wider text-sm rounded-full flex items-center justify-center gap-3 hover:bg-foreground transition-colors duration-300 mt-4"
            >
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
