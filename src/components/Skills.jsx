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
        name: "Next.js",
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
        name: "TypeScript",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
    ],
  },
  {
    title: "Backend / APIs",
    skills: [
      {
        name: "Node.js",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 70,
      },
      {
        name: "Express.js",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
      {
        name: "REST APIs",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 85,
      },
      {
        name: "MongoDB",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 60,
      },
      {
        name: "Authentication (JWT)",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 60,
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git / GitHub",
        experience: "3+ years",
        levelText: "Expert",
        levelPercent: 90,
      },
      {
        name: "Docker",
        experience: "1+ years",
        levelText: "Intermediate",
        levelPercent: 50,
      },
      {
        name: "CI / CD",
        experience: "1+ years",
        levelText: "Intermediate",
        levelPercent: 50,
      },
      {
        name: "Figma",
        experience: "2+ years",
        levelText: "Intermediate",
        levelPercent: 65,
      },
      {
        name: "Performance Optimization",
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
      return "from-green-400 to-emerald-500";
    case "Intermediate":
      return "from-yellow-400 to-yellow-600";
    case "Advanced":
      return "from-blue-400 to-blue-600";
    default:
      return "from-gray-400 to-gray-500";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-black/80 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Skills <span className="text-emerald-500">& Expertise</span>
        </h2>
        <p className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I master to build scalable and modern products.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="mx-auto mt-16 max-w-7xl grid gap-4 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-[0_0_80px_rgba(0,255,140,0.2)] transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="mb-6 text-lg font-semibold ">{group.title}</h3>

            <div className="space-y-6">
              {group.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs text-gray-100">
                      {skill.name}
                      <div className="text-[10px] text-gray-500">
                        {skill.experience}
                      </div>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold
                      ${
                        skill.levelText === "Expert"
                          ? "bg-green-500 text-white"
                          : skill.levelText === "Intermediate"
                            ? "bg-emerald-800 text-white"
                            : "bg-blue-500 text-white"
                      }`}
                    >
                      {skill.levelText}
                    </span>
                  </div>

                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.levelPercent}%` }}
                      transition={{
                        duration: 1,
                        delay: skillIndex * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full  bg-gradient-to-r ${getLevelColor(skill.levelText)}`}
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
