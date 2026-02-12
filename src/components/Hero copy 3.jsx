import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const titles = [
    "Front-End Developer",
    "Python Automation Expert",
    "Web Scraping Specialist",
    "YouTube Automation Expert",
    "Freelancer",
  ];

  const longestTitle = titles.reduce(
    (a, b) => (a.length > b.length ? a : b),
    "",
  );

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 70);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black/80 pt-16 sm:pt-20"
    >
      <div
        className="
          max-w-7xl mx-auto 
          px-4 sm:px-6 lg:px-10 
          py-16 sm:py-20 
          grid gap-16 
          items-center 
          grid-cols-1 md:grid-cols-2
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          {/* Badge */}
          <span
            className="
              inline-flex items-center justify-center md:justify-start
              gap-2 px-4 py-2 
              rounded-full bg-green-500/10 
              text-green-400 text-sm 
              mb-6 
              w-full sm:w-fit mx-auto md:mx-0
            "
          >
            ⭐ React Developer & UI/UX Enthusiast
          </span>

          {/* Heading (NO JUMP FIXED) */}
          <h1
            className="
              relative
              min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[4.5rem] xl:min-h-[5rem]
              text-3xl sm:text-4xl md:text-5xl xl:text-5xl
              font-bold leading-tight
              mb-4 
            "
          >
            {/* Invisible width holder */}
            <span className="absolute invisible whitespace-nowrap">
              {longestTitle}
            </span>

            {/* Visible typing text */}
            <span className="block break-words">
              {text}
              <span className="text-green-400 animate-pulse">|</span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              text-gray-400 
              max-w-full sm:max-w-md md:max-w-xl 
              mx-auto md:mx-0 
              mb-10 
              text-sm sm:text-base
            "
          >
            I’m a Front-End Developer and Python Automation & Web Scraping
            Specialist. I build responsive websites and smart automation — from
            web scraping and email to file management — delivering efficient,
            seamless digital solutions that save time and drive results.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto mx-auto md:mx-0">
            <a
              href="/Roohullah_CV.pdf"
              download
              className="
                bg-white text-black 
                px-4 py-3 
                rounded-lg text-sm font-medium 
                hover:opacity-90 hover:bg-green-400 hover:text-white 
                shadow-md hover:shadow-green-400/40 
                transition transform cursor-pointer 
                w-full sm:w-52 
                text-center
              "
            >
              Download CV
            </a>

            <a
              href="mailto:your-email@example.com?subject=Hiring Inquiry&body=Hi Roohullah,%0D%0AI would like to hire you for a project."
              className="
                border border-green-400 text-green-400 
                px-4 py-3 
                rounded-lg text-sm font-medium 
                hover:bg-green-400 hover:text-black 
                shadow-md hover:shadow-green-400/40 
                transition transform cursor-pointer 
                w-full sm:w-52 
                text-center
              "
            >
              Hire Me
            </a>
          </div>

          {/* Stats */}
          <div
            className="
              grid grid-cols-2 sm:grid-cols-4 
              gap-6 
              text-sm 
              max-w-md sm:max-w-none 
              mx-auto md:mx-0
            "
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Technologies", value: "10+" },
              { label: "Client Satisfaction", value: "98%" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <h3 className="text-green-400 text-2xl font-semibold">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE / MOCK (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center w-full"
        >
          <div
            className="
              relative w-full 
              max-w-[320px] 
              sm:max-w-[420px] 
              md:max-w-[400px] 
              lg:max-w-[440px]
            "
          >
            {/* Corner Light Effects */}
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-emerald-500/25 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-green-400/25 blur-3xl rounded-full animate-pulse"></div>

            {/* Premium Border Wrapper */}
            <div
              className="
                relative rounded-3xl p-[1px] 
                bg-gradient-to-br 
                from-emerald-400/40 
                via-transparent 
                to-emerald-600/40
              "
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div
                  className="
                    absolute top-0 left-[-50%] 
                    w-[200%] h-[1.5px] 
                    bg-gradient-to-r 
                    from-transparent via-emerald-400 to-transparent 
                    animate-lightMove
                  "
                ></div>
              </div>

              <div
                className="
                  relative rounded-3xl overflow-hidden 
                  h-[380px] 
                  sm:h-[440px] 
                  md:h-[500px] 
                  bg-black 
                  shadow-[0_0_35px_rgba(16,185,129,0.12)]
                "
              >
                <div
                  className="
                    absolute inset-0 
                    bg-gradient-to-t 
                    from-black/60 via-transparent to-white/5 
                    z-10
                  "
                ></div>

                <img
                  src="/RoohullahPic.JPG"
                  alt="Roohullah || Front-End Developer"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

                <div
                  className="
                    absolute top-4 right-4 
                    bg-black/70 backdrop-blur-md 
                    px-4 py-1 
                    rounded-full text-green-400 text-xs 
                    border border-white/10 shadow-lg z-20
                  "
                >
                  Available for Work
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              absolute -bottom-6 sm:bottom-6 
              left-1/2 -translate-x-1/2 
              bg-black/80 backdrop-blur-md 
              px-5 sm:px-6 py-3 
              rounded-full 
              flex flex-wrap justify-center gap-3 sm:gap-4 
              text-green-400 text-xs sm:text-sm 
              border border-white/10 shadow-xl
            "
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
