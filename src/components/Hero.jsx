import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "Front-End Specialist",
  "Python Automation Engineer",
  "Web Scraping Engineer",
  "Software Developer",
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
    <section
      id="hero"
      className="relative bg-black pt-28 pb-16 overflow-hidden"
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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <span className="inline-block  px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm">
            👋 Hello, I'm Roohullah
          </span>

          {/* Title (Reduced + Proper Scaling) */}
          {/* <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl
              font-bold text-white
              leading-tight
              mb-6
              break-words
            "
          >
            I Build Modern <br className="hidden sm:block" />
            <span className="text-green-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1> */}
          <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white py-4">
            <span className="text-green-400 block max-w-full truncate">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed mb-8">
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
          {/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center lg:text-left">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "10+", label: "Technologies" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-xl sm:text-2xl text-green-400 font-semibold bg-amber-700">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div> */}
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "10+", label: "Technologies" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-xl sm:text-2xl text-green-400 font-semibold px-3 py-1 rounded">
                  {item.value}
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
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] sm:w-[330px] md:w-[380px] lg:w-[420px]">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-3xl"></div>

            <img
              src="/RoohullahPic.JPG"
              alt="Roohullah"
              className="
                relative
                w-full
                h-[380px] sm:h-[430px] md:h-[480px]
                object-cover
                rounded-2xl
                border border-white/10
                shadow-2xl
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
