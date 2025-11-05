'use client';

import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value as string));
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // replace with your key
    formData.append('subject', 'New Contact Message from DUQOR');
    formData.append('redirect', ''); // optional redirect URL

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setSuccess('Failed to send message. Please try again later.');
      }
    } catch {
      // removed unused 'err' variable
      setSuccess('Failed to send message. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <MapPin size={26} className="text-[#d4af37]" />, label: 'Address', value: 'Dubai, UAE' },
    { icon: <Phone size={26} className="text-[#d4af37]" />, label: 'Phone', value: '+971 XXX XXX XXX' },
    { icon: <Mail size={26} className="text-[#d4af37]" />, label: 'Email', value: 'info@duqor.ae' },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-linear-to-br from-black via-[#1a1a1a] to-[#0f0f0f] text-white"
    >
      {/* Glowing background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(212,175,55,0.25), transparent 60%)',
        }}
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide"
        >
          <span className="bg-linear-to-r from-[#d4af37] to-[#f6e27a] text-transparent bg-clip-text">
            Get In Touch
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-full bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#d4af37]">{item.label}</h3>
                  <p className="text-gray-300">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="w-full h-80 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
            >
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

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-[#d4af37]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {(['name', 'email', 'phone'] as const).map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  placeholder={
                    field === 'phone'
                      ? 'Phone Number'
                      : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`
                  }
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
                className="w-full px-4 py-3 text-white bg-transparent border border-[#d4af37]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400 transition-all"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.4)' }}
                className="w-full bg-linear-to-r from-[#d4af37] to-[#f6e27a] text-black py-3 rounded-lg font-semibold shadow-md hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className={`text-center mt-3 font-medium ${
                    success.includes('successfully') ? 'text-[#d4af37]' : 'text-red-500'
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
