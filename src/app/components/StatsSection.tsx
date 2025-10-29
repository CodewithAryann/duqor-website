"use client";
import React, { useState, useEffect, useRef } from "react";

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

  // Detect when the section is in viewport
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

  // Animate numbers
  useEffect(() => {
    if (!visible) return;

    const duration = 2000; // animation time (2s)
    const startTime = performance.now();

    const updateCounts = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounts(
        stats.map((stat) => {
          const target = parseInt(stat.number.replace("+", ""));
          return Math.floor(target * progress);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  }, [visible, stats]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-linear-to-r from-[#c2a158] to-[#b89845] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transform transition-all duration-700 ease-out"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[idx]}
                {stat.number.includes("+") && "+"}
                {stat.number.includes("%") && "%"}
              </div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
