import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaCogs,
  FaBolt,
  FaCodeBranch,
  FaRobot,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    title: "Web Application Development",
    description:
      "Building modern, scalable, and high-performance web applications using React, JavaScript, Tailwind CSS, and clean architecture.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Responsive UI Development",
    description:
      "Creating pixel-perfect, mobile-first interfaces that adapt seamlessly across all devices and screen sizes.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Python Automation",
    description:
      "Automating repetitive tasks, data processing, and workflows using Python to save time and increase efficiency.",
    icon: <FaRobot />,
  },
  {
    title: "Web Scraping & Data Extraction",
    description:
      "Extracting structured data from websites using Python tools like BeautifulSoup and Selenium.",
    icon: <FaSearch />,
  },
  {
    title: "Custom Components & Systems",
    description:
      "Developing reusable UI components and scalable design systems to ensure consistency and faster development.",
    icon: <FaCogs />,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website speed and performance through best practices like lazy loading, optimized assets, and clean code.",
    icon: <FaBolt />,
  },
  {
    title: "UI / UX Implementation",
    description:
      "Transforming designs into clean, accessible, and user-friendly interfaces that enhance user experience.",
    icon: <FaPalette />,
  },
  {
    title: "Code Review & Technical Consulting",
    description:
      "Reviewing codebases, improving architecture, and providing technical guidance to enhance project quality.",
    icon: <FaCodeBranch />,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-black/80 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-14 text-center tracking-wide"
        >
          My <span className="text-emerald-500">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-md hover:shadow-emerald-500/30 transition cursor-pointer"
            >
              <div className="text-emerald-400 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
