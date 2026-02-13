import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const roles = [
  "Front-End Specialist",
  "Python Automation Engineer",
  "Web Scraping Engineer",
  "Software Developer",
  "Freelancer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (forward) {
          if (subIndex < roles[index].length) {
            setSubIndex(subIndex + 1);
          } else {
            setTimeout(() => setForward(false), 800);
          }
        } else {
          if (subIndex > 0) {
            setSubIndex(subIndex - 1);
          } else {
            setForward(true);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
        setText(roles[index].substring(0, subIndex));
      },
      forward ? 70 : 40,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 80;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    // <section
    //   id="hero"
    //   className="relative bg-black/80 pt-28 pb-16 overflow-hidden"
    // >
    <section
      id="hero"
      className="relative bg-black/80 pt-28 pb-16 overflow-hidden sm:overflow-visible"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          grid items-center gap-12
          grid-cols-1 lg:grid-cols-2
          min-h-[85vh]
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left bg"
        >
          {/* Badge */}
          <span className="inline-block  px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
            👋 Hello, I'm Roohullah
          </span>

          <h1 className="font-heading relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white py-4">
            <span className="font-heading block max-w-full truncate">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          {/* Paragraph */}
          {/* <p className=" font-body text-gray-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed mb-8 sm:mb-4 md:mb-6 sm:text-justify md:text-justify">
            
          </p> */}
          <p className="font-body text-gray-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed mb-8 sm:mb-4 md:mb-6 text-justify">
            I’m a Front-End Developer and Python Automation & Web Scraping
            Specialist. I build responsive websites and smart automation — from
            web scraping and email to file management — delivering efficient,
            seamless digital solutions that save time and drive results.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              download
              className="bg-green-500 text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-400 transition"
            >
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")}
              className="border border-green-400 text-green-400 px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-400 hover:text-black transition"
            >
              Hire Me
            </motion.button>
          </div>
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:mt-6 md:mt-7 sm:gap-3 md:gap-4">
            {[
              { value: 3, suffix: "+", label: "Years Experience" },
              { value: 20, suffix: "+", label: "Projects Completed" },
              { value: 10, suffix: "+", label: "Technologies" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-xl sm:text-2xl text-green-400 font-semibold px-3 py-1 rounded">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                  />
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE (FIXED SIZE) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end hidden"
        >
          <div className="relative w-[300px] sm:w-[360px] md:w-[420px] aspect-square">
            {/* Soft Green Glow */}
            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl scale-110"></div>

            {/* Green Gradient Arc Ring */}
            <div
              className="absolute inset-0 rounded-full border-[6px] border-transparent
      bg-[conic-gradient(from_180deg_at_50%_50%,#22c55e,#16a34a,#15803d,#22c55e)]
      mask-[radial-gradient(farthest-side,transparent_calc(100%-6px),black_0)]
    "
            ></div>

            {/* Profile Image */}
            <div className="absolute inset-[14px] rounded-full overflow-hidden border border-green-400/30 shadow-2xl">
              <img
                src="/RoohullahPic.JPG"
                alt="Roohullah"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ICON WRAPPER */}
            <div className="absolute inset-0">
              {/* Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="icon-style animate-pulse-soft">📩</div>
              </div>

              {/* 60° */}
              <div className="absolute w-full h-full rotate-[60deg]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-60deg]">
                  <div className="icon-style animate-pulse-soft delay-200">
                    💻
                  </div>
                </div>
              </div>

              {/* 120° */}
              <div className="absolute w-full h-full rotate-[120deg]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-120deg]">
                  <div className="icon-style animate-pulse-soft delay-400">
                    📊
                  </div>
                </div>
              </div>

              {/* 180° */}
              <div className="absolute w-full h-full rotate-[180deg]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-180deg]">
                  <div className="icon-style animate-pulse-soft delay-600">
                    📱
                  </div>
                </div>
              </div>

              {/* 240° */}
              <div className="absolute w-full h-full rotate-[240deg]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-240deg]">
                  <div className="icon-style animate-pulse-soft delay-800">
                    ⚙️
                  </div>
                </div>
              </div>

              {/* 300° */}
              <div className="absolute w-full h-full rotate-[300deg]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-300deg]">
                  <div className="icon-style animate-pulse-soft delay-1000">
                    🌐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
