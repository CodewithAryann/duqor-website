"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  Hammer,
  Layers,
  Zap,
  Quote,
  Sparkles,
  Palette,
  Eye,
  Lightbulb,
} from "lucide-react";

const COPPER_GRADIENT =
  "bg-clip-text text-transparent bg-gradient-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";

interface HeroImage {
  src: string;
  alt: string;
}

interface Particle {
  x: number;
  y: number;
  dur: number;
}

// Utility: predictable pseudo-random function
function seededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

/* ──────────────────────────── HERO SECTION WITH FORM ─────────────────────────── */
function HeroSection() {
  const heroImages: HeroImage[] = useMemo(
    () => [
      {
        src: "/images/villa/1.jpeg",
        alt: "Interior view of Luxury Villa featuring elegant design",
      },
    ],
    []
  );

  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setSlide((s) => (s + 1) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    const id = setInterval(nextSlide, 7000);
    return () => clearInterval(id);
  }, [nextSlide]);

  /* --- SAFE PARTICLES (no hydration mismatch) --- */
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const rand = seededRandom(12345);
    const generated: Particle[] = Array.from({ length: 12 }).map(() => ({
      x: rand() * 1200,
      y: rand() * 800,
      dur: 3 + rand() * 4,
    }));
    setParticles(generated);
  }, []);

  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    if (!phone || phone.replace(/\D/g, "").length < 9) {
      alert("Please enter a valid phone number");
      return;
    }

    // Submit to Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Thank you! We'll contact you soon.");
          form.reset();
          setPhone("");
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={slide}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <Image
          src={heroImages[slide].src}
          alt={heroImages[slide].alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Particles */}
  {mounted && (
    <div className="absolute inset-0 pointer-events-none z-10">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#e7c675] rounded-full opacity-40"
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [p.y, p.y - 100, p.y],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )}

  {/* Content */}
  <div
  className="relative z-20 w-full max-w-7xl mx-auto
    px-4 sm:px-6
    pt-24 sm:pt-32
    py-16 lg:py-20
    lg:pl-[7%]
    md:pr-[7%]"
>


    <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="space-y-6 text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight">
          Villa Renovation{" "}
          <span className={COPPER_GRADIENT}>Reimagined</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
          Transforming villas into timeless, elegant homes through design,
          craftsmanship, and intelligent living solutions.
        </p>

       <div className="flex justify-center lg:justify-start pt-3">
  <Link href="/portfolio" className="hidden sm:inline-block">
  <button className="group cursor-pointer px-8 py-4 bg-linear-to-r from-[#e7c675] to-[#c38a27] text-black font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
    View All Projects
    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
  </button>
</Link>

</div>
      </motion.div>

      {/* Right */}
        <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-auto lg:mx-0"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Let&apos;s Discuss Your Project
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-5">
        Fill in your details and we’ll reach out soon.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="access_key"
          value="b601d7fe-9d0c-448b-8f4e-f83b4879d175"
        />
        <input type="hidden" name="subject" value="New Villa Renovation Inquiry" />

        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c38a27] focus:border-transparent outline-none transition-all text-gray-900"
            placeholder="Your full name"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c38a27] focus:border-transparent outline-none transition-all text-gray-900"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone with Country Code */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Phone *
            </label>
            <PhoneInput
  country={"ae"} // default country
  value={phone}
  onChange={setPhone}
  inputProps={{
    name: "phone",
    required: true,
    placeholder: "+971 50 123 4567",
  }}
  containerStyle={{ width: "100%" }} // full width container
  inputStyle={{
    width: "100%",
    paddingLeft: "48px", // leaves space for dropdown flag
    height: "44px",
    borderRadius: "0.5rem",
    border: "1px solid #D1D5DB", // matches Tailwind gray-300
    fontSize: "0.875rem", // Tailwind text-sm
    color: "#111827", // Tailwind gray-900
  }}
  buttonStyle={{
    border: "none",
    borderRadius: "0.5rem 0 0 0.5rem",
  }}
  dropdownStyle={{
    borderRadius: "0.5rem",
    color: "#111827",
  }}
/>

          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c38a27] focus:border-transparent outline-none transition-all resize-none text-gray-900"
            placeholder="Tell us about your villa renovation project..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-5 py-3 bg-linear-to-r from-[#e7c675] to-[#c38a27] text-black text-sm font-semibold rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </motion.div>

    </div>
  </div>
</section>

  );
}

/* ───────────────────────── INTRO SECTION ───────────────────────── */
function Introduction() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Crafting <span className={COPPER_GRADIENT}>Timeless Spaces</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At Duqor, we renovate villas with a holistic approach—balancing
          architecture, interiors, and lifestyle. Every renovation is tailored to
          enhance comfort, beauty, and long-term value.
        </p>
      </motion.div>
      <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mx-auto mt-20 h-0.5 bg-linear-to-r from-transparent via-[#c38a27] to-transparent"
            />
    </section>
  );
}

/* ───────────────────────── DESIGN APPROACH ───────────────────────── */
function DesignApproach() {
  const approaches = useMemo(
    () => [
      {
        title: "Concept Development",
        desc: "Turning your vision into spatial storytelling.",
        icon: <Sparkles className="w-8 h-8 text-[#c38a27]" />,
      },
      {
        title: "Material & Finish Selection",
        desc: "Blending textures, lighting, and color for maximum appeal.",
        icon: <Palette className="w-8 h-8 text-[#c38a27]" />,
      },
      {
        title: "Spatial Planning & Lighting",
        desc: "Optimizing layout for movement, visibility, and flow.",
        icon: <Lightbulb className="w-8 h-8 text-[#c38a27]" />,
      },
      {
        title: "Execution & Detailing",
        desc: "From fixtures to finishes, every detail matters.",
        icon: <Hammer className="w-8 h-8 text-[#c38a27]" />,
      },
    ],
    []
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className={COPPER_GRADIENT}>Renovation Philosophy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to execution, we craft spaces that resonate with your
            lifestyle and aesthetic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SIGNATURE PROJECTS ───────────────────────── */
function SignatureProjects() {
  const slide = {
    img: "/images/villa/2.jpeg",
    title: "Luxury Villa Retreat",
    desc: "A thoughtfully renovated villa combining modern design with elegant, comfortable living spaces.",
    alt: "Interior view of Luxury Villa Retreat showcasing modern architecture",
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Signature <span className={COPPER_GRADIENT}>Projects</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <Image
            src={slide.img}
            alt={slide.alt}
            width={1600}
            height={600}
            className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              {slide.title}
            </h3>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl">{slide.desc}</p>
            <Link
  href="/portfolio"
  className="inline-flex items-center gap-2 px-6 py-3
    bg-white/20 backdrop-blur-sm text-white font-semibold
    rounded-full hover:bg-white/30 transition-all"
>
  Explore All Projects
  <ArrowRight className="w-5 h-5" />
</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── CORE CAPABILITIES ───────────────────────── */
function CoreCapabilities() {
  const items = useMemo(
    () => [
      {
        icon: <Eye className="w-6 h-6" />,
        label: "Concept to Reality Execution",
        desc: "Transforming approved designs into fully built spaces with precise detailing and on-site coordination.",
      },
      {
        icon: <Layout className="w-6 h-6" />,
        label: "Space Planning & Layout Optimization",
        desc: "Efficient zoning of retail, office, or commercial spaces to improve movement, visibility, and usability.",
      },
      {
        icon: <Layers className="w-6 h-6" />,
        label: "High-Quality Fit-Out & Finishing Works",
        desc: "Execution of ceilings, flooring, joinery, wall finishes, and bespoke elements with premium materials.",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        label: "Lighting, Electrical & Display Installations",
        desc: "Installation of functional and decorative lighting, power points, and display systems aligned with design intent.",
      },
    ],
    []
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Core <span className={COPPER_GRADIENT}>Capabilities</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="shrink-0 w-12 h-12 bg-linear-to-br from-[#e7c675] to-[#c38a27] rounded-lg flex items-center justify-center text-black">
                {item.icon}
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {item.label}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ───────────────────────── CLIENT EXPERIENCE ───────────────────────── */
function ClientExperience() {
  return (
    <section className="py-20 px-6 bg-linear-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <Quote className="w-16 h-16 mx-auto text-[#c38a27] opacity-50" />
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic">
          &quot;Our villa has been transformed into a timeless space of comfort and
          sophistication.&quot;
        </blockquote>
        <p className="text-lg text-gray-600 font-semibold">
          — Villa Owner, Abu Dhabi
        </p>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── FINAL CTA ───────────────────────── */
function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
     <Image
  src="/images/villa/4.jpeg"
  alt="Elegant villa exterior at sunset"
  fill
  className="object-cover"
  priority
/>
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Let&apos;s Redefine Your{" "}
          <span className={COPPER_GRADIENT}>Villa Living</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          Transform your villa into a timeless sanctuary where comfort, elegance,
          and modern design come together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-6">
          <Link
  href="/contact"
  className="inline-block px-8 py-4 bg-linear-to-r from-[#e7c675] to-[#c38a27] text-black font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  Contact Us
</Link>
          <Link
  href="/portfolio"
  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
>
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── PAGE EXPORT ───────────────────────── */
export default function VillaInteriors() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Introduction />
      <DesignApproach />
      <SignatureProjects />
      <CoreCapabilities />
      <ClientExperience />
      <FinalCTA />
    </div>
  );
}