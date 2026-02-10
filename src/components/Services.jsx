import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaCogs,
  FaBolt,
  FaCodeBranch,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications using React, Next.js, and modern JavaScript frameworks with pixel-perfect designs.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Responsive Design",
    description:
      "Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes with exceptional user experience.",
    icon: <FaMobileAlt />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces with a focus on usability, accessibility, and modern trends.",
    icon: <FaPalette />,
  },
  {
    title: "Custom Components",
    description:
      "Developing reusable, scalable component libraries and design systems that maintain consistency across projects.",
    icon: <FaCogs />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and best practices.",
    icon: <FaBolt />,
  },
  {
    title: "Code Review & Consulting",
    description:
      "Providing expert code reviews, architecture consulting, and technical guidance to improve your projects.",
    icon: <FaCodeBranch />,
  },
];

export default function Services() {
  // Split into first row (2 items) and second row (4 items)
  const firstRow = services.slice(0, 2);
  const secondRow = services.slice(2);

  return (
    <section
      id="services"
      // className="py-24 bg-black/70 relative z-10"
      className="relative z-10 bg-black/80 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-wide"
        >
          My <span className="text-emerald-500">Services</span>
        </motion.h2>

        {/* First Row - 2 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {firstRow.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition"
            >
              <div className="text-green-400 text-3xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Second Row - 4 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {secondRow.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition"
            >
              <div className="text-green-400 text-3xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
