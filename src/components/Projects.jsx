import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 6,
    title: "Amazon Scraping Engine",
    category: "Python Automation & Scraping",
    description:
      "Enterprise-grade Amazon scraping automation with intelligent captcha handling.",
    img: "https://img.freepik.com/free-photo/3d-delivery-robot-working_23-2151150149.jpg?t=st=1771501230~exp=1771504830~hmac=26ac75806ff5e3e05385b32e567f4dbbe47f6a7228718eeb7a82f6b1c62e2a16&w=1480",
    link: "https://roohullah-dev.github.io/amazon_scraping_Tool/",
  },

  {
    id: 5,
    title: "YouTube HD Downloader – Python",
    category: "Python Automation & Scraping",
    description:
      "Automates downloading YouTube videos and playlists, merging audio-video into high-quality HD files.",
    img: "https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg",
    link: "https://your-ecommerce-demo.com",
  },

  {
    id: 7,
    title: "Ali Express Scraping Tool",
    category: "Python Automation & Scraping",
    description:
      "Automated AliExpress high-resolution product image scraping using intelligent Selenium automation",
    img: "https://img.freepik.com/free-vector/isometric-e-commerce-design_23-2148559624.jpg",
    link: "https://roohullah-dev.github.io/AliExpress_Media_Scraper/",
  },

  {
    id: 8,
    title: "UltraCodeX Automation Engine",
    category: "Python Automation & Scraping",
    description:
      "Custom Python script engine delivering powerful automation, data processing, and workflow solutions.",
    img: "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524400.jpg?t=st=1771501485~exp=1771505085~hmac=7d6a9c92dfdf326ff47e038487a7feebca66956017245809a5b456b1cd3283ea&w=1480",
    link: "https://roohullah-dev.github.io/ultraCodeX/",
  },

  {
    id: 10,
    title: "Auto Email Reminder",
    category: "Python Automation & Scraping",
    description:
      "Smart automated invoice reminder system powered by Python and Google Sheets",
    img: "https://img.freepik.com/free-vector/email-notification-icon-isolated-white-background-vector-cartoon-illustration-envelope-with-letter-computer-screen-new-message-received-inbox-alert-business-software-design-element_107791-23706.jpg?t=st=1771500802~exp=1771504402~hmac=56574f55189b47ab6e6a9a5e10ed850497d73de507bd105ac4d11fd33c088079&w=1480",
    link: "https://roohullah-dev.github.io/Auto-Email-Reminder-System/",
  },

  {
    id: 4,
    title: "WoodworkerExpress Data Scraping Engine",
    category: "Python Automation & Scraping",
    description:
      "Enterprise-grade Python scraper extracting structured product data efficiently from WoodworkerExpress.",
    img: "https://img.freepik.com/free-photo/person-working-wood-working-industry-factory_23-2151352618.jpg",
    link: "https://roohullah-dev.github.io/woodworker_Engine/",
  },

  {
    id: 1,
    title: "E-commerce Store",
    category: "Interactive Web Apps",
    description:
      "A modern e-commerce platform with product listings, cart, and secure checkout.",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    link: "https://your-ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Dashboard UI Kit",
    category: "UI Components",
    description: "A clean and reusable dashboard UI kit for fast prototyping.",
    img: "https://images.unsplash.com/photo-1612831455544-04ebf5f6b2d8",
    link: "https://your-ecommerce-demo.com",
  },
  {
    id: 3,
    title: "Full Stack Blog",
    category: "Interactive Web Apps",
    description:
      "A full stack blogging platform with authentication, posts, and comments.",
    img: "https://images.unsplash.com/photo-1612832021096-1c8c0c9d1f88",
    link: "https://your-ecommerce-demo.com",
  },

  {
    id: 11,
    title: "Full Stack Blog",
    category: "Interactive Web Apps",
    description:
      "A full stack blogging platform with authentication, posts, and comments.",
    img: "https://images.unsplash.com/photo-1612832021096-1c8c0c9d1f88",
    link: "https://your-ecommerce-demo.com",
  },
  {
    id: 12,
    title: "Full Stack Blog",
    category: "Interactive Web Apps",
    description:
      "A full stack blogging platform with authentication, posts, and comments.",
    img: "https://images.unsplash.com/photo-1612832021096-1c8c0c9d1f88",
    link: "https://your-ecommerce-demo.com",
  },
  {
    id: 13,
    title: "Dashboard UI Kit",
    category: "UI Components",
    description: "A clean and reusable dashboard UI kit for fast prototyping.",
    img: "https://images.unsplash.com/photo-1612831455544-04ebf5f6b2d8",
    link: "https://your-ecommerce-demo.com",
  },
  {
    id: 14,
    title: "Dashboard UI Kit",
    category: "UI Components",
    description: "A clean and reusable dashboard UI kit for fast prototyping.",
    img: "https://images.unsplash.com/photo-1612831455544-04ebf5f6b2d8",
    link: "https://your-ecommerce-demo.com",
  },
  {
    id: 15,
    title: "Dashboard UI Kit",
    category: "UI Components",
    description: "A clean and reusable dashboard UI kit for fast prototyping.",
    img: "https://images.unsplash.com/photo-1612831455544-04ebf5f6b2d8",
    link: "https://your-ecommerce-demo.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

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

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative z-10 bg-black/80 py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-snug text-white mb-6">
            My <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A showcase of my work, featuring Python automation projects, web
            scraping solutions, and responsive web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap">
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
        <motion.div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group block"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 sm:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl"></div>

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
            </motion.a>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition text-sm sm:text-base cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
