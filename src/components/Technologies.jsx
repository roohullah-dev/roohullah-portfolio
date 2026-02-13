import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";

const technologies = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  {
    name: "CSS3 / Tailwind CSS",
    icon: <FaCss3Alt className="text-blue-600" />,
  },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  {
    name: "Web Scraping (BeautifulSoup / Selenium)",
    icon: <FaPython className="text-blue-400" />,
  },
  { name: "Automation Scripts", icon: <FaPython className="text-blue-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative z-10 bg-black/90 py-16 sm:py-20 lg:py-28"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Technologies <span className="text-emerald-500">& Tools</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          My tech stack and tools I use to build modern, scalable, and
          high-performance products.
        </p>
      </motion.div>

      {/* Technologies Grid */}
      <div className="mx-auto mt-12 sm:mt-16 max-w-7xl grid gap-6 px-4 sm:px-6 lg:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-5 sm:p-6
              shadow-lg
              transform hover:-translate-y-1 hover:scale-105
              transition-all duration-300
              flex flex-col items-center justify-center
            "
          >
            <div className="text-6xl mb-4">{tech.icon}</div>
            <p className="text-center font-semibold text-white text-sm sm:text-base">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
