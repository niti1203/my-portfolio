'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import CountUp from './ui/CountUp';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay to ensure animation finishes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            scale: 1.1,
            transition: { 
              duration: 1, 
              ease: [0.76, 0, 0.24, 1],
              opacity: { duration: 0.5 }
            }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Grain overlay for preloader */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-overlay" />
          
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="flex items-baseline"
            >
              <CountUp
                from={0}
                to={100}
                duration={2}
                className="text-[clamp(4rem,15vw,12rem)] font-black tracking-tighter text-foreground"
                onEnd={() => {
                  // Optional: handle end of count
                }}
              />
              <span className="text-3xl md:text-5xl font-black text-accent ml-2">%</span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 flex flex-col items-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent/50" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-mono">
                Initializing Experience
              </span>
              <span className="w-8 h-[1px] bg-accent/50" />
            </div>
          </motion.div>

          {/* Decorative accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
