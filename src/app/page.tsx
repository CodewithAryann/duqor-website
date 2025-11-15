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
  title:
    'Duqor Interiors | Luxury Residential, Commercial & Hospitality Interior Design in UAE',
  description:
    'Duqor Interiors is a premier interior design company in Dubai, UAE, specializing in luxury residential, commercial, and hospitality interiors. Transforming spaces with modern elegance, functionality, and bespoke craftsmanship.',

  keywords: [
    'Interior Design UAE',
    'Interior Design Dubai',
    'Residential Interior Design',
    'Commercial Interior Design',
    'Hospitality Interior Design',
    'Luxury Interior Design',
    'Modern Interior Design',
    'Classic Interiors',
    'Minimalist Interiors',
    'Office Interior Design',
    'Villa Interior Design',
    'Restaurant Interior Design',
    'Hotel Interior Design',
    'Retail Interior Design',
    'Fit-out Company Dubai',
    'Interior Fit Out UAE',
    'Turnkey Interior Solutions',
    'Space Planning and Design',
    'Custom Furniture Design',
    'Interior Decoration Services',
    'Architectural Design Dubai',
    'Interior Renovation UAE',
    '3D Interior Visualization',
    'Home Renovation Dubai',
    'Office Renovation UAE',
    'Interior Design Consultation',
    'Bespoke Interior Design UAE',
    'High-End Interiors Dubai',
    'Duqor Interiors',
    'Interior Design Studio Dubai',
    'Dubai Interior Designers',
    'Luxury Interiors UAE',
  ],

  // --- FAVICONS ADDED HERE ---
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },

  openGraph: {
    title:
      'Duqor Interiors | Luxury Residential, Commercial & Hospitality Interior Design in UAE',
    description:
      'Duqor Interiors delivers high-end interior design services across Dubai and UAE, creating bespoke, modern, and elegant spaces for residential, commercial, and hospitality projects.',
    url: 'https://www.duqor.ae/',
    siteName: 'Duqor Interiors',
    images: [
      {
        url: 'https://www.duqor.ae/images/011.png',
        width: 1200,
        height: 630,
        alt: 'Duqor Interiors – Luxury Interior Design in Dubai, UAE',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Duqor Interiors | Luxury Residential, Commercial & Hospitality Interior Design in UAE',
    description:
      'Duqor Interiors transforms residential, commercial, and hospitality spaces across Dubai and the UAE with luxury interior design solutions.',
    images: ['https://www.duqor.ae/images/011.png'],
  },

  robots: 'index, follow',

  verification: {
    google: 'V3Yre0rwVk6SPt9ZiQ3uZYLzIBtCHdo0X5g5U_uYXBQ',
  },
};

// --- JSON-LD Structured Data for Home Page ---
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Duqor Interiors',
  url: 'https://www.duqor.ae/',
  logo: 'https://www.duqor.ae/images/011.png',
  sameAs: [
    'https://www.instagram.com/duqor',
    'https://www.facebook.com/duqor',
    'https://www.linkedin.com/company/duqor',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971543517100',
      contactType: 'customer service',
      email: 'info@duqor.com',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
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
