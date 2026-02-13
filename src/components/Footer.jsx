export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 text-center lg:text-left">
          {/* About (Wider Column) */}
          <div className="flex-[2]">
            <h3 className="text-white text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-400 text-left text-sm sm:text-base">
              Crafting modern, responsive websites and intelligent automation
              solutions with precision and efficiency. From front-end
              development to Python-based automation and web scraping, I focus
              on creating seamless digital experiences that save time and drive
              results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-emerald-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Services / Expertise */}
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li>Front-End Development (React, HTML, CSS, Tailwind)</li>
              <li>Python Automation & Web Scraping</li>
              <li>Email & File Management Automation</li>
              <li>Performance Optimization & Responsive Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:your@email.com"
                className="hover:text-emerald-500"
              >
                your@email.com
              </a>
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="hover:text-emerald-500">
                +123 456 7890
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Location:</strong> New Kabul City, Kabul Afghanistan
            </p>
          </div>
        </div>

        {/* Optional Footer Paragraph */}
        <div className="mt-8 text-center text-gray-400 text-sm sm:text-base">
          Delivering modern web solutions and intelligent automation that help
          businesses save time and achieve more.
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roohullah-Dev. All rights reserved.
      </div>
    </footer>
  );
}
