'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_y4hh2jh',   // replace with your EmailJS Service ID
        'template_kalvrfm',  // replace with your EmailJS Template ID
        form,
        'HCWuVxfAeo6lDUDAK'    // replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setForm({ name: '', email: '', phone: '', message: '' });
          setLoading(false);
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#c2a158] mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-black text-lg">Address</h3>
                  <p className="text-gray-700">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#c2a158] mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-black text-lg">Phone</h3>
                  <p className="text-gray-700">+971 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#c2a158] mt-1" size={28} />
                <div>
                  <h3 className="font-semibold text-black text-lg">Email</h3>
                  <p className="text-gray-700">info@duqor.ae</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Duqor Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.999999!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348b2fb1234%3A0x123456789abcdef!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-xl shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2a158] ring-2 ring-gray-300 hover:ring-gray-400 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2a158] ring-2 ring-gray-300 hover:ring-gray-400 transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2a158] ring-2 ring-gray-300 hover:ring-gray-400 transition-all"
              />
              <textarea
                name="message"
                placeholder="Project Details"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2a158] ring-2 ring-gray-300 hover:ring-gray-400 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold 
                           hover:bg-[#c2a158] transition-colors cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
