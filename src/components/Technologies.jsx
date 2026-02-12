import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNpm,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

const technologies = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3 / Tailwind CSS", icon: <FaCss3Alt /> },

  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "REST API Development", icon: <FaDatabase /> },

  { name: "Python", icon: <FaPython /> },
  { name: "Web Scraping (BeautifulSoup / Selenium)", icon: <FaPython /> },
  { name: "Automation Scripts", icon: <FaPython /> },

  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "SQL Databases", icon: <FaDatabase /> },
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative z-10 bg-black/80 py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-wide"
        >
          Technologies
          <span className="text-emerald-500"> I Use</span>
        </motion.h2>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              title={tech.name}
              whileHover={{ scale: 1.07, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-emerald-500/30 transition transform cursor-pointer"
            >
              <div className="text-4xl text-emerald-400">{tech.icon}</div>
              <h3 className="text-white text-sm md:text-base font-medium text-center">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
