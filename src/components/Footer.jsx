import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/80 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3 text-center md:text-left">
        {/* About */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h3 className="text-white font-bold text-2xl tracking-wide">
            Roohullah
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
            I build modern web applications, automation systems, and data-driven
            solutions that help businesses grow and operate more efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h4 className="text-white font-semibold text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li>
              <a href="#hero" className="hover:text-emerald-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-emerald-400 transition">
                Services
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="hover:text-emerald-400 transition"
              >
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h4 className="text-white font-semibold text-lg">Connect</h4>

          <div className="flex gap-5 justify-center md:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
            >
              <FaTwitter size={22} />
            </a>

            <a
              href="mailto:roohullahdev5@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6 text-center md:text-left  border-t border-white/10 w-full p-2">
            © {new Date().getFullYear()} Roohullah. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div className="mt-12 text-center text-gray-600 text-xs tracking-wide">
        Built with React, Tailwind CSS & Passion 🚀
      </div>
    </footer>
  );
}
