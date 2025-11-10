"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll if hash exists
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/business-vertical", label: "Business Vertical" },
    { href: "/about-us", label: "About Us" },
  ];

  const businessVerticals = [
    { label: "Residential Interiors", href: "/residential" },
    { label: "Commercial Spaces", href: "/commercial" },
    { label: "Retail Design", href: "/retail" },
    { label: "Hospitality", href: "/hospitality" },
  ];

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.querySelector("#services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#services");
    }
    setMenuOpen(false);
  };

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
        <Image
  src="/images/copper-logo.png"
  alt="Duqor Logo"
  width={120}
  height={40}
  priority
  className="h-8 w-auto transition-transform duration-500 hover:scale-105 select-none"
/>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[15px] font-medium tracking-wide relative">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="relative group"
              onMouseEnter={() =>
                label === "Business Vertical" && setDropdownOpen(true)
              }
              onMouseLeave={() =>
                label === "Business Vertical" && setDropdownOpen(false)
              }
            >
              {label === "Business Vertical" ? (
                <>
                  <div className="flex items-center gap-1 cursor-pointer text-white/90 transition-all duration-300 hover:text-[#d4af37]">
                    <span className="relative pb-0.5 group">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_6px_rgba(212,175,55,0.8)]"></span>
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180 text-[#d4af37]" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown */}
                  <div
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className={`absolute left-0 mt-3 w-56 bg-black/95 border border-[#d4af37]/30 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.15)] py-3 backdrop-blur-md transition-all duration-300 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-3 invisible"
                    }`}
                  >
                    {businessVerticals.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2 text-sm text-white/90 hover:text-[#d4af37] hover:bg-[#1a1a1a]/70 transition-all duration-300"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : label === "Services" ? (
                <a
                  href="#services"
                  onClick={handleServiceClick}
                  className="relative group text-white/90 transition-all duration-300 hover:text-[#d4af37]"
                >
                  <span className="relative pb-0.5 group">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_6px_rgba(212,175,55,0.8)]"></span>
                  </span>
                </a>
              ) : (
                <Link
                  href={href}
                  className="relative group text-white/90 transition-all duration-300 hover:text-[#d4af37]"
                >
                  <span className="relative pb-0.5 group">
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_6px_rgba(212,175,55,0.8)]"></span>
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
       {/* Social Icons (Desktop) */}
<div className="hidden md:flex items-center space-x-6">
  {[
    {
      icon: <HiOutlineMail size={18} aria-hidden="true" />,
      link: "mailto:info@duqor.com",
      label: "Email Duqor",
    },
    {
      icon: <FaInstagram size={18} aria-hidden="true" />,
      link: "https://www.instagram.com/duqor",
      label: "Visit Duqor Instagram",
    },
    {
      icon: <FaFacebookF size={18} aria-hidden="true" />,
      link: "https://www.facebook.com/profile.php?id=61583173334874",
      label: "Visit Duqor Facebook",
    },
    {
      icon: <FaLinkedinIn size={18} aria-hidden="true" />,
      link: "https://www.linkedin.com/company/duqor/",
      label: "Visit Duqor LinkedIn",
    },
  ].map(({ icon, link, label }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
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
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            <li key={href} className="w-full text-center">
              {label === "Business Vertical" ? (
                <details className="group">
                  <summary className="cursor-pointer list-none hover:text-[#d4af37] transition-colors duration-300 flex items-center justify-center gap-1">
                    {label}
                    <ChevronDown
                      size={18}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <ul className="mt-3 space-y-3 text-sm">
                    {businessVerticals.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 text-white/90 hover:text-[#d4af37] transition-all duration-300"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : label === "Services" ? (
                <a
                  href="#services"
                  onClick={handleServiceClick}
                  className="hover:text-[#d4af37] transition-colors duration-300"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#d4af37] transition-colors duration-300"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile Social Icons */}
          {/* Mobile Social Icons */}
<div className="flex items-center space-x-6 pt-6 border-t border-[#d4af37]/20 w-3/4 justify-center">
  {[
    {
      icon: <HiOutlineMail size={20} aria-hidden="true" />,
      link: "mailto:info@duqor.com",
      label: "Email Duqor",
    },
    {
      icon: <FaInstagram size={20} aria-hidden="true" />,
      link: "https://www.instagram.com/duqor",
      label: "Visit Duqor Instagram",
    },
    {
      icon: <FaFacebookF size={20} aria-hidden="true" />,
      link: "https://www.facebook.com/duqor",
      label: "Visit Duqor Facebook",
    },
    {
      icon: <FaLinkedinIn size={20} aria-hidden="true" />,
      link: "https://www.linkedin.com/company/duqor",
      label: "Visit Duqor LinkedIn",
    },
  ].map(({ icon, link, label }, i) => (
    <a
      key={i}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
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
