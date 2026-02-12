import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      // className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden"
      className="relative z-10 bg-black/80"
    >
      {/* subtle background glow */}
      {/* <div className="absolute right-[-25%] top-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -z-10" /> */}

      {/* ✅ Changed items-start to items-center */}
      {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-14 items-center sm:grid-cols-1 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm mb-6">
            &lt;/&gt; Full-Stack Developer
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-white mb-6">
            Crafting Digital <br />
            Experiences That Matter
          </h2>

          <div className="space-y-5 text-gray-400 leading-relaxed max-w-xl">
            <p>
              I’m a Front-End Developer and Python Automation & Web Scraping
              Specialist with 3 years of experience and a proven track record on
              Fiverr since August 2022. I build modern websites and smart
              automation systems that simplify tasks and deliver measurable
              results.
            </p>

            <p>
              From web scraping and email automation to file management, I
              create solutions that are fast, reliable, and scalable. My work
              combines technical precision with creative design, ensuring
              seamless user experiences and efficient workflows.
            </p>

            <p>
              I turn ideas into high-impact digital solutions. Every project is
              crafted to maximize performance, save time, and create real value
              for clients — blending expertise, strategy, and innovation at
              every step.
            </p>
          </div>

          {/* stats */}
          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { value: "45+", label: "Happy Clients" },
              { value: "2.5K+", label: "Code Commits" },
              { value: "500+", label: "GitHub Stars" },
            ].map((item) => (
              <div key={item.label} className="relative pl-4">
                <span className="absolute left-0 top-1 h-10 w-[2px] bg-green-400 items-center" />
                <h3 className="text-2xl text-green-400 font-semibold ">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-6"
        >
          {/* Expertise */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3 text-green-400">
              <span className="text-lg">&lt;/&gt;</span>
              <h3 className="font-medium">Expertise</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized in building scalable web applications using modern
              technologies and proven best practices.
            </p>
          </div>

          {/* small cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3 text-green-400">
                ✨<h3 className="font-medium">Clean Code</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Writing maintainable, scalable, and well-documented code.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3 text-green-400">
                ⚡<h3 className="font-medium">Performance</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Optimizing applications for speed and efficiency.
              </p>
            </div>
          </div>

          {/* bottom metrics */}
          <div className="grid grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div>
              <h4 className="text-green-400 font-semibold text-lg">100%</h4>
              <p className="text-gray-500 text-xs">Client Satisfaction</p>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold text-lg">24/7</h4>
              <p className="text-gray-500 text-xs">Support</p>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold text-lg">Fast</h4>
              <p className="text-gray-500 text-xs">Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
