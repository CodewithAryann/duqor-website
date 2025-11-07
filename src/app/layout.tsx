import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Metadata } from "next";

// --- Global SEO Metadata ---
export const metadata: Metadata = {
  title: "Duqor Interior Design | Residential, Commercial & Hospitality Interiors",
  description:
    "Duqor Interiors specializes in luxury residential, commercial, and hospitality interior design in UAE, delivering bespoke solutions for every space.",
  keywords: [
    "Interior Design UAE",
    "Residential Interiors",
    "Commercial Interiors",
    "Hospitality Interiors",
    "Luxury Interior Design",
    "Duqor Interiors",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Duqor Interior Design | Residential, Commercial & Hospitality Interiors",
    description:
      "Duqor Interiors specializes in luxury residential, commercial, and hospitality interior design in UAE, delivering bespoke solutions for every space.",
    url: "https://www.duqor.com/",
    siteName: "Duqor Interiors",
    images: [
      {
        url: "https://www.duqor.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duqor Interiors",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duqor Interior Design | Residential, Commercial & Hospitality Interiors",
    description:
      "Duqor Interiors specializes in luxury residential, commercial, and hospitality interior design in UAE, delivering bespoke solutions for every space.",
    images: ["https://www.duqor.com/images/og-image.jpg"],
  },
  robots: "index, follow",
};

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

        {/* Footer on all pages */}
        <Footer />
      </body>
    </html>
  );
}
