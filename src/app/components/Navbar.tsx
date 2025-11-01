"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[#d4af37]/40 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
          : "bg-linear-to-b from-black/95 to-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
         <Image
      src="/images/d-2.png"
      alt="Duqor Logo"
      width={120}
      height={40}
      priority
      className="w-auto h-auto transition-transform duration-500 hover:scale-105 select-none"
      style={{
        mixBlendMode: "normal",
        isolation: "isolate",
        filter: "none",
      }}
    />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[15px] font-medium tracking-wide">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="relative group">
              <a
                href={href}
                className="transition-all duration-300 text-white/90 group-hover:text-[#d4af37]"
              >
                {label}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { icon: <HiOutlineMail size={18} />, link: "mailto:info@duqor.com" },
            { icon: <FaInstagram size={18} />, link: "https://www.instagram.com/duqor" },
            { icon: <FaFacebookF size={18} />, link: "https://www.facebook.com/duqor" },
            { icon: <FaLinkedinIn size={18} />, link: "https://www.linkedin.com/company/duqor" },
          ].map(({ icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none transition-transform duration-300 hover:scale-110 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full transition-all duration-500 ease-in-out backdrop-blur-md ${
          menuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-10 invisible"
        } bg-black/95 border-t border-[#d4af37]/20 text-white`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8 text-lg font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#d4af37] transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-6 pt-6 border-t border-[#d4af37]/20 w-3/4 justify-center">
            {[
              { icon: <HiOutlineMail size={20} />, link: "mailto:info@duqor.com" },
              { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/duqor" },
              { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/duqor" },
              { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/company/duqor" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37] hover:scale-110 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
