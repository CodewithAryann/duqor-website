"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Stat {
  number: string;
  label: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = React.useMemo(
    () => [
      { number: "200+", label: "Projects Completed" },
      { number: "5", label: "Years Experience" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "50", label: "Expert Team Members" },
    ],
    []
  );

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate numbers smoothly
  useEffect(() => {
    if (!visible) return;

    const duration = 2000;
    const startTime = performance.now();

    const updateCounts = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCounts(
        stats.map((stat) => {
          const target = parseInt(stat.number.replace(/\D/g, ""));
          return Math.floor(target * progress);
        })
      );
      if (progress < 1) requestAnimationFrame(updateCounts);
    };

    requestAnimationFrame(updateCounts);
  }, [visible, stats]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-linear-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Subtle radial golden glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.4),transparent_70%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <motion.h3
  initial={{ scale: 0.9, opacity: 0 }}
  animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.8, delay: idx * 0.1 }}
  className="text-5xl md:text-6xl font-extrabold mb-3 font-serif
             leading-none pb-1
             bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
             bg-clip-text text-transparent
             drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] relative z-10"
>
  {counts[idx]}
  {stat.number.includes("+") && "+"}
  {stat.number.includes("%") && "%"}
</motion.h3>


              <p className="text-gray-300 text-sm md:text-base tracking-wide uppercase font-medium">
                {stat.label}
              </p>

              {/* Accent gold line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className="mx-auto mt-4 h-1 w-3/5 
                           bg-linear-to-r from-[#f5d67a] via-[#c38a27] to-[#8b5b10]
                           rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6),0_0_25px_rgba(195,138,39,0.4)]
                           origin-left"
              />

              {/* Optional shimmer glow overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-25
                           bg-linear-to-r from-transparent via-[#c2a158]/10 to-transparent rounded-full"
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
