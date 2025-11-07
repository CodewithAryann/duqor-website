import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import AboutPage from './components/Aboutus';
import DesignPhilosophy from './components/PhilosophySection';
import Process from './components/Process';
import PortfolioSection from './components/PortfolioSection';
import Introduction from './components/Intro';
import FAQ from './components/FAQ';
import { Metadata } from 'next';

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'Duqor Interiors | Luxury Residential, Commercial & Hospitality Design',
  description:
    'Duqor Interiors specializes in bespoke residential, commercial, and hospitality interior design in UAE. Transforming spaces with style, function, and luxury.',
  keywords: [
    'Interior Design UAE',
    'Residential Interior Design',
    'Commercial Interior Design',
    'Hospitality Interior Design',
    'Luxury Interiors',
    'Duqor Interiors',
    'Interior Designers UAE',
    'Modern Interiors',
  ],
  openGraph: {
    title: 'Duqor Interiors | Luxury Residential, Commercial & Hospitality Design',
    description:
      'Duqor Interiors specializes in bespoke residential, commercial, and hospitality interior design in UAE. Transforming spaces with style, function, and luxury.',
    url: 'https://www.duqor.com/',
    siteName: 'Duqor Interiors',
    images: [
      {
        url: 'https://www.duqor.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Duqor Interiors',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duqor Interiors | Luxury Residential, Commercial & Hospitality Design',
    description:
      'Duqor Interiors specializes in bespoke residential, commercial, and hospitality interior design in UAE. Transforming spaces with style, function, and luxury.',
    images: ['https://www.duqor.com/images/og-image.jpg'],
  },
  robots: 'index, follow',
};

// --- JSON-LD Structured Data for Home Page ---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duqor Interiors",
  url: "https://www.duqor.com/",
  logo: "https://www.duqor.com/images/011.png",
  sameAs: [
    "https://www.instagram.com/duqor",
    "https://www.facebook.com/duqor",
    "https://www.linkedin.com/company/duqor",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971-XXXXXXX",
      contactType: "customer service",
      email: "info@duqor.com",
      areaServed: "AE",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection />
      <Introduction />
      <AboutPage />
      <ServicesSection />
      <DesignPhilosophy />
      <StatsSection />
      <Process />
      <PortfolioSection />
      <FAQ />
      <ContactSection />
    </div>
  );
}
