import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppSticker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duqor Interiors | Luxury Interior Design in UAE",
  description:
    "Duqor Interiors delivers luxury residential, commercial, and hospitality interior design in Dubai, creating modern, functional, and elegant bespoke spaces.",
  alternates: {
    canonical: "https://www.duqor.ae/",
  },
  robots: "index, follow",
  openGraph: {
    title: "Duqor Interiors | Luxury Interior Design in UAE",
    description:
      "Luxury residential, commercial & hospitality interior design services in Dubai by Duqor Interiors. Modern, bespoke & functional spaces.",
    url: "https://www.duqor.ae/",
    siteName: "Duqor Interiors",
    images: [
      {
        url: "https://www.duqor.ae/images/copper-logo.png",
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
    title: "Duqor Interiors | Luxury Interior Design in UAE",
    description:
      "Duqor Interiors creates luxury residential, commercial and hospitality interiors in Dubai & UAE.",
    images: ["https://www.duqor.ae/images/copper-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duqor Interiors",
  url: "https://www.duqor.ae/",
  logo: "https://www.duqor.ae/images/copper-logo.png",
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
      <body className="bg-white text-gray-900 min-h-screen flex flex-col" suppressHydrationWarning>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="grow">{children}</main>

        {/* WhatsApp Floating Button */}
        <WhatsAppFloat />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
