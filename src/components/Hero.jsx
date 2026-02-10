// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       {/* Background Glow */}
//       {/* <div className="absolute inset-0 -z-10">
//         <div className="absolute left-[-20%] top-[-20%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
//         <div className="absolute right-[-20%] bottom-[-20%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
//       </div> */}

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           {/* Badge */}
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm mb-6">
//             ⭐ React Developer & UI/UX Enthusiast
//           </span>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Front-End Developer & Python Automation Specialist
//           </h1>

//           {/* Description */}
//           <p className="text-gray-400 max-w-xl mb-10">
//             I’m a Front-End Developer and Python Automation & Web Scraping
//             Specialist. I build responsive websites and smart automation — from
//             web scraping and email to file management — delivering efficient,
//             seamless digital solutions that save time and drive results.
//           </p>

//           {/* CTA */}
//           <button className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90  hover:bg-emerald-500  hover:text-white shadow-md hover:shadow-green-400/40 transition transform cursor-pointer">
//             <a
//               href="/Roohullah_CV.pdf"
//               download
//               className="inline-block bg-white text-black px-5 py-2 rounded-lg text-sm font-medium
//              hover:bg-emerald-500 hover:text-white shadow-md
//              hover:shadow-green-400/40 transition transform cursor-pointer"
//             >
//               Download CV
//             </a>
//           </button>

//           {/* Stats */}
//           <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
//             {[
//               { label: "Years Experience", value: "3+" },
//               { label: "Projects Completed", value: "20+" },
//               { label: "Technologies", value: "10+" },
//               { label: "Client Satisfaction", value: "98%" },
//             ].map((stat) => (
//               <div key={stat.label}>
//                 <h3 className="text-green-400 text-2xl font-semibold">
//                   {stat.value}
//                 </h3>
//                 <p className="text-gray-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE / MOCK */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative"
//         >
//           <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 h-96 w-auto ">
//             <img
//               src="../public/RoohullahPic.JPG"
//               alt="Roohullah||FrontEnd Developer"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Tech icons placeholder */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-5 py-3 rounded-full flex gap-2.5 text-green-400 text-sm">
//             <span>React</span>
//             <span>JS</span>
//             <span>Tailwind</span>
//             <span>Python Automation</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

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
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center w-full"
        >
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 w-full max-w-md sm:max-w-lg md:max-w-full h-72 sm:h-80 md:h-96">
            <img
              src="/RoohullahPic.JPG"
              alt="Roohullah||FrontEnd Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tech icons placeholder */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-5 py-3 rounded-full flex flex-wrap gap-2.5 text-green-400 text-xs sm:text-sm justify-center">
            <span>React</span>
            <span>JS</span>
            <span>Tailwind</span>
            <span>Python Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
