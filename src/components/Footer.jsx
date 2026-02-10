import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      // className="relative z-10 bg-black/80 text-gray-300 py-16 border-t border-white/10"
      className="relative z-10 bg-black/80 py-14 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-1 md:grid-cols-3 text-center md:text-left">
        {/* About */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-white font-bold text-xl">Roohullah</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">
            I create modern, responsive, and high-performance web applications
            that elevate user experiences and help businesses grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-white font-semibold text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a href="#hero" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-400 transition">
                Services
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="hover:text-green-400 transition"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-green-400 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-white font-semibold text-lg">Connect with Me</h4>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="roohullahdev5@gmail.com"
              className="hover:text-green-400 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            &copy; {new Date().getFullYear()} Roohullah Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
