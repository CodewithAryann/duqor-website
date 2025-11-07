"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-black text-gray-300 py-20 relative overflow-hidden border-t border-[#d4af37]/20">
    {/* Soft golden background glow */}
    <div className="absolute inset-0 bg-linear-to-t from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/011.png"
            alt="Duqor Logo"
            width={150}
            height={50}
            className="mb-4 select-none"
          />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Excellence in interior design and construction. We craft spaces that blend innovation, luxury, and timeless design.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-4 uppercase tracking-wide">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Interior Design", "Construction", "Renovation", "Project Management"].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="hover:text-[#d4af37] transition-all duration-300 relative group"
                >
                  {service}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-4 uppercase tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Portfolio", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-[#d4af37] transition-all duration-300 relative group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-4 uppercase tracking-wide">Follow Us</h4>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/people/Gulf-Duqors/pfbid0QVjHSrRKVddYkpsanbymk5nPDjfJAjNBA2UAcwv8nzXD38JAeSsxhGS6JyAoGzdhl/" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/duqor/" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/duqor" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-black shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300"
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
          <span className="text-[#d4af37] font-medium">
            Duqor Interior Design & Construction
          </span>. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
