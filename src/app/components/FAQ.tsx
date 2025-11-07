'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What types of projects does Duqor handle?',
    answer:
      'Duqor specializes in residential, commercial, and hospitality interior design, offering tailored solutions for each project type.',
  },
  {
    question: 'Do you provide turnkey services?',
    answer:
      'Yes, we offer end-to-end solutions, including concept design, space planning, material sourcing, execution, and post-project support.',
  },
  {
    question: 'Can I customize my design package?',
    answer:
      'Absolutely. We work closely with clients to create fully personalized designs that align with their vision, style, and budget.',
  },
  {
    question: 'Do you offer maintenance after project completion?',
    answer:
      'Yes, Duqor provides optional maintenance and post-handover support services to ensure your space remains pristine and functional.',
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
            Everything you need to know about working with Duqor — from design approach to project execution.
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
                      animate={{ opacity: 1, maxHeight: 500, paddingTop: 16, paddingBottom: 16 }}
                      exit={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="px-8 text-gray-400 text-base leading-relaxed overflow-hidden"
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
