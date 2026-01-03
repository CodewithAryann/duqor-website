"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "b601d7fe-9d0c-448b-8f4e-f83b4879d175", 
          subject: "New Consultation Request",
          sender_name: formData.name,
          sender_email: formData.email,
          message: formData.message + "\nPhone: " + formData.phone,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        console.error("Web3Forms error:", data);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-20">
        {/* LEFT — Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#111]/60 backdrop-blur-xl p-10 rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.25)] border border-[#d4af37]/20"
        >
          <h2 className="text-4xl font-bold text-[#d4af37] mb-6">Contact Information</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">📍 Address</h3>
              <p className="text-gray-300">
                Al ASMAWI Office, Building 1, 1st Floor #17<br />
                Ras Al Khor Industrial Area 2<br />
                Al Manama Street, Dubai, UAE
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-1">📞 Phone</h3>
              <p className="text-gray-300">+971 4 8823 427</p>
              <p className="text-gray-300">+971 54 599 9795</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-1">📧 Email</h3>
              <a href="mailto:info@duqor.ae" className="text-[#d4af37] hover:text-[#ffd700] transition">
                info@duqor.ae
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-xl overflow-hidden border border-[#d4af37]/20 shadow-lg h-60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2590.6861027808654!2d55.3556722587755!3d25.17034024586482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAl%20ASMAWI%20office%20Build%201st%20floor%20%2317%20Ras%20Al%20Khor%20Industrial%20Area%202%20Al%20Manama%20street%20%20%7C%20Dubai%20%7C%20UAE!5e1!3m2!1sen!2sae!4v1763970881014!5m2!1sen!2sae"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#111]/60 backdrop-blur-xl p-10 rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.25)] border border-[#d4af37]/20 flex flex-col gap-6"
        >
          <h2 className="text-4xl font-bold text-[#d4af37] mb-6">Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-[#d4af37] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-[#d4af37] outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-[#d4af37] outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-[#d4af37] outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 w-full cursor-pointer bg-[#d4af37] hover:bg-[#c6a034] text-black font-semibold text-lg py-4 rounded-xl shadow-lg transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 font-medium mt-2 text-center">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 font-medium mt-2 text-center">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
