'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Depending on the scope, projects usually range from 8 to 20 weeks from design to handover.',
  },
  {
    question: 'Do you handle both design and execution?',
    answer:
      'Yes, Duqor offers complete turnkey solutions, covering concept, design, fit-out, and on-site supervision.',
  },
  {
    question: 'Can I request a custom design package?',
    answer:
      'Absolutely. Every Duqor project is personalized to fit your vision, timeline, and budget.',
  },
  {
    question: 'Do you offer maintenance after handover?',
    answer:
      'Yes, optional maintenance and post-handover support services are available for long-term peace of mind.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white py-28 overflow-hidden">
      {/* Ambient Gold Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,161,88,0.25),transparent_70%)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with Duqor — from project timelines
            to personalized design solutions.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                    : 'border-[#2c2c2c] hover:border-[#d4af37]/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                } bg-[#111]/60 backdrop-blur-sm`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex justify-between items-center text-left px-8 py-6 focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded-lg"
                >
                  <span
                    className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                      isOpen ? 'text-[#d4af37]' : 'text-gray-200'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#d4af37]"
                  >
                    <ChevronDown size={26} />
                  </motion.span>
                </button>

                {/* Animated Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-px bg-linear-to-r from-transparent via-[#d4af37] to-transparent origin-left"
                />

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', paddingTop: '1rem', paddingBottom: '1rem' }}
                      exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-8 text-gray-400 text-base leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60%' }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>
    </section>
  );
};

export default FAQ;
