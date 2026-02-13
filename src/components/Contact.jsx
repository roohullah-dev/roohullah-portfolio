import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Linkedin, Twitter, Github, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageSent(false);
    setError(false);

    const SERVICE_ID = "service_roohullahDev";
    const TEMPLATE_ID = "template_elyizvb";
    const PUBLIC_KEY = "QnCF0iv1DV5lj3AMm";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setMessageSent(true);
        formRef.current.reset();
      },
      (err) => {
        setLoading(false);
        setError(true);
        console.error("Failed to send message:", err.text);
      },
    );
  };

  const glass =
    "bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg";

  return (
    <section id="contact" className="relative z-10 bg-black/80 py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl
              font-bold leading-snug
              text-white mb-6"
          >
            Let’s Work <span className="text-emerald-500">Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Whether it's a web app, automation tool, or
            scraping solution — let’s bring your idea to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* ================= FORM ================= */}
          <div className={`${glass} p-4`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-800/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-black transition-all duration-300 
                ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed opacity-60"
                    : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:scale-105 hover:shadow-emerald-500/40 shadow-lg"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Mail size={18} />}
              </button>

              {/* Status Messages */}
              {messageSent && (
                <p className="text-emerald-400 text-sm text-center">
                  ✅ Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="space-y-8">
            <div className={`${glass} p-8`}>
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 text-gray-400 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="text-emerald-400" size={18} />
                  roohullahdev5@gmail.com
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-400" size={18} />
                  +93731945209
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-emerald-400" size={18} />
                  New Kabul City, Kabul, Afghanistan
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`${glass} p-8`}>
              <p className="text-gray-400 mb-6">Connect with me</p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-black transition hover:shadow-emerald-500/40 shadow-md"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-black transition hover:shadow-emerald-500/40 shadow-md"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-emerald-500 hover:text-black transition hover:shadow-emerald-500/40 shadow-md"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
