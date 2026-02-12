import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black/80 pt-10"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-14 items-center sm:grid-cols-1 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <span className="items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm mb-6 w-72">
            ⭐ React Developer & UI/UX Enthusiast
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Front-End Developer & Python Automation Specialist
          </h1>

          {/* Description */}
          <p className="text-gray-400 max-w-full sm:max-w-md md:max-w-xl mb-10 text-sm sm:text-base">
            I’m a Front-End Developer and Python Automation & Web Scraping
            Specialist. I build responsive websites and smart automation — from
            web scraping and email to file management — delivering efficient,
            seamless digital solutions that save time and drive results.
          </p>

          {/* CTA */}
          <a
            href="/Roohullah_CV.pdf"
            download
            className="bg-white text-black px-4 py-3 rounded-lg text-sm font-medium hover:opacity-90 hover:bg-emerald-500 hover:text-white shadow-md hover:shadow-green-400/40 transition transform cursor-pointer mb-10 w-48 text-center"
          >
            Download CV
          </a>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Technologies", value: "10+" },
              { label: "Client Satisfaction", value: "98%" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <h3 className="text-green-400 text-2xl font-semibold ">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE / MOCK */}
        {/* RIGHT IMAGE / MOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center w-full"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] md:max-w-[400px]">
            {/* Corner Light Effects (Refined) */}
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-emerald-500/25 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-green-400/25 blur-3xl rounded-full animate-pulse"></div>

            {/* Premium Border Wrapper */}
            <div
              className="relative rounded-3xl p-[1px] bg-gradient-to-br 
      from-emerald-400/40 
      via-transparent 
      to-emerald-600/40"
            >
              {/* Moving Edge Light (Top Sweep Only) */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div
                  className="absolute top-0 left-[-50%] w-[200%] h-[1.5px] 
          bg-gradient-to-r from-transparent via-emerald-400 to-transparent 
          animate-lightMove"
                ></div>
              </div>

              {/* Main Card */}
              <div
                className="relative rounded-3xl overflow-hidden 
        h-[440px] 
        sm:h-[470px] 
        md:h-[500px] 
        bg-black 
        shadow-[0_0_35px_rgba(16,185,129,0.12)]"
              >
                {/* Glass Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
          from-black/60 via-transparent to-white/5 z-10"
                ></div>

                <img
                  src="/RoohullahPic.JPG"
                  alt="Roohullah || Front-End Developer"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-1 rounded-full text-green-400 text-xs border border-white/10 shadow-lg z-20">
                  Available for Work
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Badge */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 
    bg-black/80 backdrop-blur-md px-6 py-3 rounded-full 
    flex gap-4 text-green-400 text-sm border border-white/10 shadow-xl"
          >
            <span>React</span>
            <span>JavaScript</span>
            <span>Tailwind</span>
            <span>Python</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
