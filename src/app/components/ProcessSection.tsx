'use client';

import { CheckCircle2 } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Consultation & Planning',
    description:
      'We begin with a detailed consultation to understand your vision, preferences, and budget before crafting a strategic plan.',
  },
  {
    id: 2,
    title: 'Design & Visualization',
    description:
      'Our design team creates digital renderings and concept boards so you can visualize your space before execution.',
  },
  {
    id: 3,
    title: 'Execution & Construction',
    description:
      'We manage every detail — from sourcing materials to construction — ensuring quality and precision in every phase.',
  },
  {
    id: 4,
    title: 'Final Touches & Delivery',
    description:
      'Once the project is complete, we add the finishing touches and hand over a space that truly reflects your vision.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our <span className="text-[#c2a158]">Design Process</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <CheckCircle2 className="text-[#c2a158] mr-3" size={28} />
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
