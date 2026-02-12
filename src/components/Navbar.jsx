import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 w-full z-50 
        backdrop-blur bg-black/50 
        shadow-md
      "
    >
      <div
        className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-10 
          py-3 sm:py-4 
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-green-400 font-semibold text-base sm:text-lg">
          <a
            href="#hero"
            className="hover:text-green-400 transition whitespace-nowrap"
          >
            <span className="text-lg sm:text-xl">&lt;/&gt;</span>
            Roohullah
          </a>
        </div>

        {/* Desktop Nav */}
        <nav
          className="
            hidden md:flex 
            gap-6 lg:gap-8 
            text-sm lg:text-base 
            text-gray-300
          "
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.id)}
              className="hover:text-green-400 transition cursor-pointer"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll("contact")}
          className="
            hidden md:inline-block 
            bg-white text-black 
            px-4 lg:px-5 py-2.5 
            rounded-lg 
            text-xs lg:text-sm 
            font-medium 
            hover:opacity-90 hover:bg-green-400 hover:text-white 
            shadow-md hover:shadow-green-400/40 
            transition transform cursor-pointer
          "
        >
          Hire Me
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden 
            text-gray-300 
            text-2xl 
            focus:outline-none
          "
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden 
              bg-black/90 
              text-gray-300 
              overflow-hidden
            "
          >
            <div
              className="
                flex flex-col gap-4 
                px-6 py-5
              "
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll(item.id)}
                  className="
                    text-left 
                    hover:text-green-400 
                    transition cursor-pointer 
                    py-2 text-sm
                  "
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll("contact")}
                className="
                  bg-white text-black 
                  px-5 py-2.5 
                  rounded-lg 
                  text-sm font-medium 
                  hover:opacity-90 hover:bg-emerald-500 hover:text-white 
                  shadow-md hover:shadow-green-400/40 
                  transition transform cursor-pointer 
                  mt-3
                "
              >
                Hire Me
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
