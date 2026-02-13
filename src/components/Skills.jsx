import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML / CSS",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 95,
      },
      {
        name: "JavaScript (ES6+)",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 90,
      },
      {
        name: "React.js",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 90,
      },
      {
        name: "Bootstrap",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },
      {
        name: "Tailwind CSS",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 85,
      },
      {
        name: "Git / GitHub",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 90,
      },
      {
        name: "Performance Optimization",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },
    ],
  },

  {
    title: "Python Automation & Web Scraping",
    skills: [
      {
        name: "Python",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 90,
      },
      {
        name: "Selenium WebDriver",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 85,
      },
      {
        name: "Scrapy",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },
      {
        name: "Playwright",
        experience: "1+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
      {
        name: "BeautifulSoup (bs4)",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
      {
        name: "Requests / API Automation",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },
      {
        name: "Email Automation (SMTP / IMAP)",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
    ],
  },

  {
    title: "Professional Tools & Workflow",
    skills: [
      {
        name: "Documentation & Reporting",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 85,
      },
      {
        name: "UI Collaboration (Figma / Adobe XD)",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
      {
        name: "Cloud / Hosting Platforms (Netlify, Vercel, Heroku)",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
      {
        name: "Task Scheduling & Automation Tools",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },

      {
        name: "Excel / CSV / JSON Automation",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },
    ],
  },
];

const getLevelColor = (level) => {
  switch (level) {
    case "Expert":
      return "from-emerald-400 via-emerald-500 to-emerald-600";
    case "Intermediate":
      return "from-emerald-300 via-emerald-400 to-emerald-500";
    case "Advanced":
      return "from-emerald-500 via-emerald-600 to-emerald-700";
    default:
      return "from-emerald-400 to-emerald-500";
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-black/80 py-16 sm:py-20 lg:py-28"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center px-4 sm:px-6"
      >
        <h2
          className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl
              font-bold leading-snug
              text-white mb-6"
        >
          Skills <span className="text-emerald-500">& Expertise</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I master to build scalable and modern products.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div
        className="
          mx-auto mt-12 sm:mt-16
          max-w-7xl
          grid gap-6
          px-4 sm:px-6 lg:px-10
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        "
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            viewport={{ once: true }}
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-5 sm:p-6
              shadow-lg
              hover:shadow-[0_0_80px_rgba(0,255,140,0.2)]
              transform hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h3 className="mb-6 text-base sm:text-lg font-semibold text-white">
              {group.title}
            </h3>

            <div className="space-y-6">
              {group.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <div className="text-xs sm:text-sm text-gray-100">
                      {skill.name}
                      <div className="text-[10px] text-gray-500">
                        {skill.experience}
                      </div>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap
                     ${
                       skill.levelText === "Expert"
                         ? "bg-emerald-500 text-white"
                         : skill.levelText === "Intermediate"
                           ? "bg-emerald-700 text-white"
                           : "bg-emerald-600 text-white"
                     }
`}
                    >
                      {skill.levelText}
                    </span>
                  </div>

                  <div
                    className="h-2 w-full rounded-full bg-emerald-900/30
 overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.levelPercent}%` }}
                      transition={{
                        duration: 1,
                        delay: skillIndex * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(
                        skill.levelText,
                      )}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
