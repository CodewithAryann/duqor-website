import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Metadata } from "next";
import WhatsAppFloat from "./components/WhatsAppSticker";

// --- Global SEO Metadata ---
export const metadata: Metadata = {
  title:
    "Duqor Interior Design | Luxury Residential, Commercial & Hospitality Interiors in UAE",
  description:
    "Duqor Interiors is a leading interior design company in Dubai, UAE, specializing in luxury residential, commercial, and hospitality projects. We create bespoke spaces that combine modern aesthetics, functionality, and timeless elegance.",
  keywords: [
    // Core keywords
    "Interior Design UAE",
    "Interior Design Dubai",
    "Luxury Interior Design",
    "Residential Interior Design",
    "Commercial Interior Design",
    "Hospitality Interior Design",
    "Modern Interior Design",
    "Classic Interior Design",
    "Minimalist Interiors",
    "Office Interior Design",
    "Villa Interior Design",
    "Restaurant Interior Design",
    "Hotel Interior Design",
    "Retail Interior Design",
    "Fit-out Company Dubai",
    "Interior Fit Out UAE",
    "Turnkey Interior Solutions",
    "Space Planning and Design",
    "Custom Furniture Design",
    "Interior Decoration Services",
    "Architectural Design Dubai",
    "Interior Renovation UAE",
    "3D Interior Visualization",
    "Home Renovation Dubai",
    "Office Renovation UAE",
    "Interior Design Consultation",
    "Bespoke Interior Design UAE",
    "High-End Interiors Dubai",
    "Duqor Interiors",
    "Interior Design Studio Dubai",
    "Dubai Interior Designers",
    "Luxury Interiors UAE",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Duqor Interior Design | Luxury Residential, Commercial & Hospitality Interiors in UAE",
    description:
      "Duqor Interiors delivers high-end interior design services across Dubai and UAE, creating modern, classic, and bespoke spaces for residential, commercial, and hospitality projects.",
    url: "https://www.duqor.ae/",
    siteName: "Duqor Interiors",
    images: [
      {
        url: "https://www.duqor.ae/images/011.png",
        width: 1200,
        height: 630,
        alt: "Duqor Interiors – Luxury Interior Design in Dubai, UAE",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Duqor Interior Design | Luxury Residential, Commercial & Hospitality Interiors in UAE",
    description:
      "Duqor Interiors transforms residential, commercial, and hospitality spaces with luxurious and functional interior design in Dubai and across the UAE.",
    images: ["https://www.duqor.ae/images/011.png"],
  },
  robots: "index, follow",
  verification: {
    google: "V3Yre0rwVk6SPt9ZiQ3uZYLzIBtCHdo0X5g5U_uYXBQ",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duqor Interiors",
  url: "https://www.duqor.ae/",
  logo: "https://www.duqor.ae/images/011.png",
  sameAs: [
    "https://www.instagram.com/duqor",
    "https://www.facebook.com/duqor",
    "https://www.linkedin.com/company/duqor",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971543517100",
      contactType: "customer service",
      email: "info@duqor.com",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-gray-900 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Navbar on all pages */}
        <Navbar />

        {/* Page Content */}
        <main className="grow">{children}</main>
        <WhatsAppFloat />
        {/* Footer on all pages */}
        <Footer />
      </body>
    </html>
  );
}
