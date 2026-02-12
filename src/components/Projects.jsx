import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Store",
    category: "Interactive Web Apps",
    description:
      "A modern e-commerce platform with product listings, cart, and secure checkout.",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
  },
  {
    id: 2,
    title: "Dashboard UI Kit",
    category: "UI Components",
    description: "A clean and reusable dashboard UI kit for fast prototyping.",
    img: "https://images.unsplash.com/photo-1612831455544-04ebf5f6b2d8",
  },
  {
    id: 3,
    title: "Full Stack Blog",
    category: "Interactive Web Apps",
    description:
      "A full stack blogging platform with authentication, posts, and comments.",
    img: "https://images.unsplash.com/photo-1612832021096-1c8c0c9d1f88",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Python Automation & Scraping",
    description: "A personal portfolio website showcasing projects and skills.",
    img: "https://images.unsplash.com/photo-1612831455598-96c0f5b6b4fa",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Python Automation & Scraping",
    description: "A personal portfolio website showcasing projects and skills.",
    img: "https://images.unsplash.com/photo-1612831455598-96c0f5b6b4fa",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Interactive Web Apps",
    "UI Components",
    "Python Automation & Scraping",
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative z-10 bg-black/80 py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A showcase of my work, featuring Python automation projects, web
            scraping solutions, and responsive web applications. Use the filters
            to explore each category and see how I turn ideas into high-impact
            digital solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition whitespace-nowrap ${
                filter === cat
                  ? "bg-green-500 text-black"
                  : "bg-white/10 text-green-400 hover:bg-green-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 sm:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Sliding Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6">
                {/* Dark layer behind text */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl"></div>

                {/* Content */}
                <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium z-10">
                  {project.category}
                </span>
                <h3 className="text-white font-semibold text-lg sm:text-xl z-10">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base mt-2 z-10">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
