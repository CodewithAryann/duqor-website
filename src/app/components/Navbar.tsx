"use client";
import { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { href: string; label: string }[] = [
    { href: '#services', label: 'Services' },
    { href: '#project', label: 'Project' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg text-gray-900' : 'bg-white/10 backdrop-blur-md text-white'
    }`}>
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src={scrolled ? "/images/black-logo.png" : "/images/logo.png"}
            alt="Duqor Logo"
            className="w-28 transition-opacity duration-300"
          />
        </Link>

        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-[#c2a158] transition-colors">{label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-6">
  {/* <a href="#contact" className="flex items-center space-x-2 hover:text-[#c2a158] transition-colors">
    <Phone size={18} />
    <span>+971562339323</span>
  </a> */}

  {/* Social Icons */}
  {/* Email */}
  <a href="mailto:yourname@example.com" className="flex items-center space-x-2 hover:text-[#c2a158] transition-colors">
    <HiOutlineMail size={18} />
  </a>
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#c2a158] transition-colors">
    <FaInstagram size={18} />
  </a>
  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#c2a158] transition-colors">
    <FaFacebookF size={18} />
  </a>
  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#c2a158] transition-colors">
    <FaLinkedinIn size={18} />
  </a>
</div>

        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white text-gray-900">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)} className="block hover:text-[#c2a158] transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;