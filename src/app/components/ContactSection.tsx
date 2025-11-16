'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number>(0);

  useEffect(() => {
    if (leftSideRef.current) {
      setLeftHeight(leftSideRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (leftSideRef.current) {
        setLeftHeight(leftSideRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '11ce7814-b7a8-4543-9fa2-7892e049afc1',
          subject: 'New Contact Message from DUQOR',
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setSuccess('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccess('Network error. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={26} stroke="url(#goldGradient)" />,
      label: 'Address',
      value: 'Dubai, UAE',
    },
    {
      icon: <Phone size={26} stroke="url(#goldGradient)" />,
      label: 'Phone',
      value: (
        <div className="flex flex-col gap-1">
          <a href="tel:+97142871395" className="hover:text-[#d4af37] transition-all duration-200">
            +971 4 287 1395
          </a>
          <a href="tel:+971501234567" className="hover:text-[#d4af37] transition-all duration-200">
            +971 50 123 4567
          </a>
        </div>
      ),
    },
    {
      icon: <Mail size={26} stroke="url(#goldGradient)" />,
      label: 'Email',
      value: <a href="mailto:info@duqor.ae" className="hover:text-[#d4af37] transition-all duration-200">info@duqor.ae</a>,
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-linear-to-br from-black via-[#1a1a1a] to-[#0f0f0f] text-white">
      {/* Gradient defs for icons */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e7c675" />
            <stop offset="50%" stopColor="#c38a27" />
            <stop offset="100%" stopColor="#8b5b10" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ background: 'radial-gradient(circle at 30% 40%, rgba(212,175,55,0.25), transparent 60%)' }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-4xl md:text-5xl font-serif font-bold text-center mb-14 leading-[1.1] pb-1
                     bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] bg-clip-text text-transparent
                     drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]
                     [text-shadow:0_0_6px_rgba(255,220,120,0.5),
                                  0_0_14px_rgba(195,138,39,0.4),
                                  0_0_24px_rgba(139,91,16,0.3)]"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <motion.div ref={leftSideRef} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-10">
            {contactInfo.map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05, x: 5 }} transition={{ duration: 0.3 }} className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">{item.label}</h3>
                  <div className="text-gray-300">{item.value}</div> {/* Changed from <p> to <div> */}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }} className="w-full h-80 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <iframe
                title="Duqor Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.999999!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348b2fb1234%3A0x123456789abcdef!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right side: Form */}
          <motion.div
            style={{ minHeight: leftHeight }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-[#d4af37]/20 flex flex-col"
          >
            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
              {(['name', 'email', 'phone'] as const).map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  placeholder={field === 'phone' ? 'Phone Number' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  value={form[field]}
                  onChange={handleChange}
                  required={field !== 'phone'}
                  className="w-full px-4 py-3 text-white bg-transparent border border-[#d4af37]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400 transition-all"
                />
              ))}

              <textarea
                name="message"
                placeholder="Project Details"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-white bg-transparent border border-[#d4af37]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400 transition-all flex-1"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.4)' }}
                className="w-full cursor-pointer bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] text-black py-3 rounded-lg font-semibold shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 mt-2"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className={`text-center mt-3 font-medium ${
                    success.includes('successfully') ? 'bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]' : 'text-red-500'
                  }`}
                >
                  {success}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
