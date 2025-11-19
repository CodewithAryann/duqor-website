import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppSticker";
import Head from "next/head"; // <-- import Head

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://www.duqor.ae/" />
      </Head>
      <body
        className="bg-white text-gray-900 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />

        {/* Navbar on all pages */}
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
