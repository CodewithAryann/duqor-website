import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Duqor Interior Design",
  description: "Interior design and construction company",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-gray-900 min-h-screen flex flex-col"
        suppressHydrationWarning
      >
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
