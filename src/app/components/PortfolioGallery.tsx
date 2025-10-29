"use client";
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'Modern Villa Interior',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      description: 'Contemporary luxury living space with minimalist design',
    },
    {
      title: 'Corporate Office',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      description: 'Professional workspace designed for productivity and collaboration',
    },
    {
      title: 'Boutique Hotel',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
      description: 'Elegant hotel interiors combining comfort and sophistication',
    },
    {
      title: 'Restaurant Design',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      description: 'Atmospheric dining space with custom millwork and lighting',
    },
    {
      title: 'Luxury Apartment',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      description: 'High-end apartment with bespoke furniture and finishes',
    },
    {
      title: 'Retail Showroom',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      description: 'Innovative retail space maximizing product visibility',
    },
  ];

  return (
    <section id="project" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project</h2>
          <p className="text-lg text-gray-600">Showcasing excellence in design and construction</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setActiveIndex(idx)}
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#c2a158] mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
