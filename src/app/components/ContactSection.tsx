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
          access_key: "b601d7fe-9d0c-448b-8f4e-f83b4879d175",
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
      value: `Al ASMAWI office Build 1st floor #17 Ras Al Khor Industrial Area 2 Al Manama street 
| Dubai | UAE`,
    },
    {
      icon: <Phone size={26} stroke="url(#goldGradient)" />,
      label: "Phone",
      value: (
        <div className="flex flex-col gap-1">
          <a href="tel:+97148823427" className="hover:text-[#d4af37]">
            +971 4 8823 427
          </a>
          <a href="tel:+971545999795" className="hover:text-[#d4af37]">
            +971 54 599 9795
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
          Book Free Design Consultation
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
            <div className="w-full h-60 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2590.6861027808654!2d55.3556722587755!3d25.17034024586482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAl%20ASMAWI%20office%20Build%201st%20floor%20%2317%20Ras%20Al%20Khor%20Industrial%20Area%202%20Al%20Manama%20street%20%20%7C%20Dubai%20%7C%20UAE!5e1!3m2!1sen!2sae!4v1763970881014!5m2!1sen!2sae"
  width="600"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
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
