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
      { number: "500", label: "Projects Completed" },
      { number: "15", label: "Years Experience" },
      { number: "98", label: "Client Satisfaction" },
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
                animate={
                  visible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="text-5xl md:text-6xl font-extrabold mb-3 bg-linear-to-r text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] bg-clip-text"
              >
                {counts[idx]}
                {stat.number.includes("+") && "+"}
                {stat.number.includes("%") && "%"}
              </motion.h3>
              <p className="text-gray-300 text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </p>

              {/* Accent glow line below each stat */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mx-auto mt-4 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
