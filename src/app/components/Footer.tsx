"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61583173334874" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/duqor/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/duqor" },
  ];

  return (
    <footer className="bg-black text-gray-300 py-20 relative overflow-hidden border-t border-[#d4af37]/20">
      
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/copper-logo.png"
              alt="Duqor Logo"
              width={150}
              height={50}
              className="mb-4 select-none"
            />
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Excellence in interior design and construction. We craft spaces that blend innovation, luxury, and timeless design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] mb-4 uppercase tracking-wide">
              Business Vertical
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                { label: "Residential Interiors", href: "/residential" },
                { label: "Commercial Interiors", href: "/commercial" },
                { label: "Hospitality Interiors", href: "/hospitality" },
                // { label: "Retail Interiors", href: "/retail" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[#d4af37] transition-all duration-300 relative group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] mb-4 uppercase tracking-wide">
              Company
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" }, 
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[#d4af37] transition-all duration-300 relative group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] mb-4 uppercase tracking-wide">
              Contact
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+971545999795"
                  className="hover:text-[#d4af37] transition-all duration-300"
                >
                  +971 54 599 9795
                </a>
              </li>
              <li>
                <a
                  href="tel:+97148823427"
                  className="hover:text-[#d4af37] transition-all duration-300"
                >
                  +971 4 8823 427
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@duqor.ae"
                  className="hover:text-[#d4af37] transition-all duration-300"
                >
                  info@duqor.ae
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] 
                             hover:bg-linear-to-b hover:from-[#e7c675] hover:via-[#c38a27] hover:to-[#8b5b10] hover:text-black 
                             shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4af37]/20 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
              Duqor Interior Design & Construction
            </span>{" "}
            . All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
