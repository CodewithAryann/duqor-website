"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

// Remove this line from the top level


export default function AboutPage() {
  const [phone, setPhone] = useState("");
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);
  const particleCount = 20; // Reduced for performance

  useEffect(() => {
    const sparks = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(sparks);
  }, []);

  const headingClass = "relative font-serif font-bold tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";
  const buttonClass = "px-8 sm:px-10 py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black bg-gradient-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2";

  return (
    <>
      <Head>
        <title>Duqor | About Us - Crafting Timeless Interiors</title>
        <meta name="description" content="Duqor merges design excellence with timeless craftsmanship to create residential, commercial, hospitality, and retail interiors." />
        <link rel="canonical" href="https://www.duqor.ae/about-us" />
      </Head>

      <section className="bg-[#0a0a0a] text-white overflow-hidden">
        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <Image src="/images/about/hero.png" alt="Duqor About Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full bg-[#e7c675]/70"
                style={{ top: p.y, left: p.x }}
                animate={{ y: [p.y, p.y - 30, p.y], opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div className="relative z-30 max-w-3xl mt-20 sm:mt-32">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`text-3xl sm:text-4xl md:text-5xl mb-6 ${headingClass}`}
            >
              Crafting Spaces that Inspire, Reflect, and Endure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl mb-12 font-light text-gray-200"
            >
              At Duqor, we merge design excellence with timeless craftsmanship to create environments that tell stories of elegance and purpose.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="flex flex-wrap justify-center gap-4 sm:gap-6"
>
  <Link href="/portfolio">
    <button className={`${buttonClass} cursor-pointer`}>Explore Projects</button>
  </Link>
  <Link href="/contact">
    <button className={`${buttonClass} cursor-pointer`}>Contact Us</button>
  </Link>
</motion.div>

          </div>
        </div>

        {/* Philosophy Section */}
        <div className="py-24 px-4 sm:px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -60, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden">
            <Image src="/images/about/design.png" alt="Duqor Design Philosophy" width={600} height={400} className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <h2 className={`${headingClass} text-3xl sm:text-4xl mb-4`}>Our Philosophy</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Every Duqor project begins with a vision — to blend form and function in perfect harmony. Great design not only looks extraordinary but feels effortless and deeply personal.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our process is rooted in collaboration, creativity, and attention to detail — ensuring every corner, texture, and light fixture contributes to the experience.
            </p>
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <div className="py-24 bg-[#111]">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={`${headingClass} text-3xl sm:text-4xl text-center mb-16`}>
            Our Expertise
          </motion.h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 px-4 sm:px-6">
            {[
              { title: "Residential Design", desc: "Crafting intimate, luxurious living spaces that resonate with your lifestyle.", img: "/images/about/residential.png" },
              { title: "Commercial Design", desc: "Designing workspaces that inspire productivity, collaboration, and innovation.", img: "/images/about/commercial.png" },
              { title: "Hospitality Design", desc: "Creating immersive environments that embody comfort, elegance, and identity.", img: "/images/about/hospitality.png" },
              { title: "Retail Design", desc: "Designing engaging retail experiences that elevate brand presence and customer interaction.", img: "/images/about/retail.png" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-[#2c2c2c] bg-[#0d0d0d] hover:border-[#c38a27]/50 transition-all group">
                <div className="overflow-hidden">
                  <Image src={item.img} alt={item.title} width={400} height={250} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className={`${headingClass} text-xl mb-2`}>{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Contact Form Section */}
<section className="py-28 bg-[#0a0a0a] text-white px-6" id="contact-form">
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold">
      Lets <span className="bg-clip-text text-transparent bg-linear-to-r from-[#e7c675] via-[#c38a27] to-[#8b5b10]">Discuss</span> Your Project
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto mt-3">
      Fill out the form and our design specialists will connect with you shortly.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    {/* Left Image */}
    <div className="relative w-full h-[610px] rounded-2xl overflow-hidden">
      <Image
        src="/images/portfolio/project-3/pic-14.png"
        alt="Residential Interior Design"
        fill
        className="object-cover scale-105 hover:scale-100 transition-all duration-700"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#00000045] to-transparent" />
    </div>

    {/* Right Form */}
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={(e) => {
        if (!phone || phone.replace(/\D/g, "").length < 9) {
          e.preventDefault();
          alert("Please enter a valid phone number");
        }
      }}
      className="h-[610px] bg-[#111] border border-[#2c2c2c] rounded-2xl p-10 flex flex-col justify-between"
    >
      <input type="hidden" name="access_key" value="YOUR_WEB3FORM_ACCESS_KEY" />
      <input type="hidden" name="subject" value="Residential Interior Inquiry - Duqor" />

      <div className="space-y-4 grow">
        {/* Name */}
        <div>
          <label className="block text-gray-300 mb-1">Name *</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg focus:border-[#c38a27] outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg focus:border-[#c38a27] outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-300 mb-1">Phone *</label>
          <PhoneInput
            country="ae"
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            containerStyle={{ width: '100%' }}
            inputStyle={{
              width: '100%',
              height: '48px',
              paddingLeft: '60px',
              backgroundColor: '#0d0d0d',
              borderRadius: '0.5rem',
              border: '1px solid #333',
              color: '#fff',
            }}
            buttonStyle={{
              border: '1px solid #333',
              borderRadius: '0.5rem 0 0 0.5rem',
              backgroundColor: '#0d0d0d',
            }}
            dropdownStyle={{
              backgroundColor: '#111',
              color: '#c38a27',
              borderRadius: '0.5rem',
            }}
            dropdownClass="custom-phone-dropdown"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg focus:border-[#c38a27] outline-none resize-none"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#c38a27] text-black rounded-full font-semibold hover:bg-[#d4b15a] transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

        

        {/* Final CTA */}
        <div className="relative text-center py-28 sm:py-32 bg-cover bg-center px-4 sm:px-6" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/about/cta.png')` }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className={`${headingClass} text-4xl sm:text-5xl md:text-5xl mb-6`}>
              Let’s <span className={headingClass}>Create</span> Something Extraordinary Together
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
              Whether it’s a residence, workspace, or hospitality destination — Duqor brings visions to life through design that speaks.
            </p>
            <Link href="/contact">
              <button className={`${buttonClass} mx-auto cursor-pointer `}>
                Contact Us <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
