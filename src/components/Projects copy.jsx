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
  // Add more projects here
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
      // className="relative py-20 bg-black/90 overflow-hidden"
      className="relative z-10 bg-black/80 py-24"
    >
      {/* Background Glow */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-20%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl " />
        <div className="absolute right-[-20%] bottom-[-20%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl cursor-pointer" />
      </div> */}

      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {/* A collection of my work ranging from full-stack applications, modern
            UI components, and creative web applications. Click on the filters
            to explore specific categories. */}
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
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition
                ${filter === cat ? "bg-green-500 text-black" : "bg-white/10 text-green-400 hover:bg-green-500/20"}
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
            >
              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                {project.category}
              </span>

              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay with Title & Description */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 px-4 py-4 text-white">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-1">
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
