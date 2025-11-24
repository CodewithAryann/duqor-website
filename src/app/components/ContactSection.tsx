"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "11ce7814-b7a8-4543-9fa2-7892e049afc1",
          subject: "New Contact Message from DUQOR",
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch {
      setSuccess("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={26} stroke="url(#goldGradient)" />,
      label: "Address",
      value: "Dubai, UAE",
    },
    {
      icon: <Phone size={26} stroke="url(#goldGradient)" />,
      label: "Phone",
      value: (
        <div className="flex flex-col gap-1">
          <a href="tel:+97142871395" className="hover:text-[#d4af37]">
            +971 4 287 1395
          </a>
          <a href="tel:+971564706375" className="hover:text-[#d4af37]">
            +971 56 470 6375
          </a>
        </div>
      ),
    },
    {
      icon: <Mail size={26} stroke="url(#goldGradient)" />,
      label: "Email",
      value: (
        <a href="mailto:info@duqor.ae" className="hover:text-[#d4af37]">
          info@duqor.ae
        </a>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-linear-to-br from-black via-[#1a1a1a] to-[#0f0f0f] text-white overflow-hidden"
    >
      {/* Gold gradient defs */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e7c675" />
            <stop offset="50%" stopColor="#c38a27" />
            <stop offset="100%" stopColor="#8b5b10" />
          </linearGradient>
        </defs>
      </svg>

      {/* Static glowing background (NO JS ANIMATION) */}
      <div className="absolute inset-0 -z-10 opacity-25 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.25),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-14 leading-[1.1]
          bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
          text-transparent bg-clip-text"
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
              >
                <div className="p-3 rounded-full bg-[#d4af37]/10">
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold bg-linear-to-b 
                  from-[#e7c675] via-[#c38a27] to-[#8b5b10] text-transparent bg-clip-text"
                  >
                    {item.label}
                  </h3>
                  <div className="text-gray-300">{item.value}</div>
                </div>
              </div>
            ))}

            {/* MAP */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <iframe
                title="Duqor Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.999999!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348b2fb1234%3A0x123456789abcdef!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 rounded-2xl bg-white/10 border border-[#d4af37]/20 backdrop-blur-lg shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              {(["name", "email", "phone"] as const).map((field) => (
                <input
                  key={field}
                  name={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  required={field !== "phone"}
                  placeholder={
                    field === "phone"
                      ? "Phone Number"
                      : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`
                  }
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-transparent border border-[#d4af37]/40 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
                />
              ))}

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Project Details"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-transparent border border-[#d4af37]/40 rounded-lg focus:ring-2 focus:ring-[#d4af37]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]
                text-black py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p
                  className={`text-center font-medium mt-3 ${
                    success.includes("success")
                      ? "bg-linear-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10] bg-clip-text text-transparent"
                      : "text-red-500"
                  }`}
                >
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
