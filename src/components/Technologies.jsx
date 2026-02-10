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
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL / Databases", icon: <FaDatabase /> },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      // className="py-24 bg-black/70 relative z-10"
      className="relative z-10 bg-black/80 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05, y: -3 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-green-400/40 transition transform cursor-pointer"
            >
              <div className="text-3xl text-green-400">{tech.icon}</div>
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
