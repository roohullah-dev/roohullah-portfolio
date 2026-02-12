// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID", // replace with your EmailJS service ID
//         "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
//         formRef.current,
//         "YOUR_PUBLIC_KEY", // replace with your EmailJS public key
//       )
//       .then(
//         () => {
//           setLoading(false);
//           setMessageSent(true);
//           formRef.current.reset();
//         },
//         (error) => {
//           setLoading(false);
//           alert("Failed to send message: " + error.text);
//         },
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="relative z-10 py-24 text-white px-4 border"
//     >
//       {/* Section Header */}
//       <motion.div
//         className="text-center max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8 text-center tracking-wide">
//           Contact Me
//         </h2>
//         <p className="mt-3 text-gray-400">
//           I’d love to hear from you! Send me a message or connect via social
//           links below.
//         </p>
//       </motion.div>

//       {/* Contact Form */}
//       <motion.form
//         ref={formRef}
//         onSubmit={handleSubmit}
//         className="mt-12 max-w-3xl mx-auto grid gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
//           />
//         </div>
//         <textarea
//           name="message"
//           rows="5"
//           placeholder="Your Message"
//           required
//           className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full md:w-auto bg-white hover:bg-emerald-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition cursor-pointer hover:text-white ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//         {messageSent && (
//           <p className="text-green-400 mt-2 text-center">
//             Message sent successfully!
//           </p>
//         )}
//       </motion.form>

//       {/* Social Links */}
//       <motion.div
//         className="mt-12 flex justify-center space-x-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <a
//           href="https://github.com/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-green-400 transition text-2xl"
//         >
//           <i className="fab fa-github"></i>
//         </a>
//         <a
//           href="https://linkedin.com/in/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-green-400 transition text-2xl"
//         >
//           <i className="fab fa-linkedin"></i>
//         </a>
//         <a
//           href="mailto:youremail@example.com"
//           className="text-gray-400 hover:text-green-400 transition text-2xl"
//         >
//           <i className="fas fa-envelope"></i>
//         </a>
//       </motion.div>
//     </section>
//   );
// }
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  // --- EmailJS Integration ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageSent(false); // Reset message sent status
    setError(false); // Reset error status

    // Replace with your actual EmailJS keys
    const SERVICE_ID = "service_roohullahDev";
    const TEMPLATE_ID = "template_elyizvb";
    const PUBLIC_KEY = "QnCF0iv1DV5lj3AMm";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setMessageSent(true);
        formRef.current.reset(); // Clear form fields
      },
      (err) => {
        setLoading(false);
        setError(true);
        console.error("Failed to send message:", err.text);
        alert("Failed to send message. Please check console for details.");
      },
    );
  };
  // ---------------------------

  const glassClasses =
    "bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/10";

  return (
    <div
      id="contact"
      // className="min-h-screen bg-black text-white flex items-center justify-center p-4"
      className="relative z-10 bg-black/80 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Let's Work
            <span className="text-emerald-500"> Together</span>
          </h1>
          <p className="text-gray-400">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Panel: Form */}
          <div className={`flex-1 ${glassClasses}`}>
            {/* Attach formRef and onSubmit handler here */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                {/* Note the 'name' attribute change to match EmailJS template requirements */}
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-400 text-white placeholder-gray-500 p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                {/* Note the 'name' attribute change to match EmailJS template requirements */}
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                  className="mt-1 block w-full bg-gray-700/50 border-green-400 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-400 text-white placeholder-gray-500 p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project"
                  required
                  className="mt-1 block w-full bg-gray-700/50 border-gray-600 rounded-lg shadow-sm focus:border-green-400 focus:ring-green-400 text-white placeholder-gray-500 p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading} // Disable button while sending
                className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black transition duration-150 ease-in-out 
                ${loading ? "opacity-50 cursor-not-allowed bg-gray-500" : "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"}`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Mail className="ml-2 h-4 w-4" />}
              </button>

              {/* Confirmation Messages */}
              {messageSent && (
                <p className="text-green-400 mt-2 text-center">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 mt-2 text-center">
                  Failed to send message.
                </p>
              )}
            </form>
          </div>

          {/* Right Panel: Contact Info */}
          <div className="flex-1 space-y-6">
            <div className={`${glassClasses} bg-gray-800/50 p-6`}>
              <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-sm">roohullahdev5@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-sm">
                    New Kabul City, Kabul, Afghanistan
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-sm">+93731945209</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className={`${glassClasses} bg-gray-800/50 p-6`}>
              <p className="text-gray-400 mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/70 rounded-lg hover:bg-emerald-500 shadow-md hover:shadow-green-400/40 transition"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/70 rounded-lg hover:opacity-90 hover:bg-emerald-500 hover:text-white shadow-md hover:shadow-green-400/40 transition transform cursor-pointer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/70 rounded-lg hover:bg-emerald-500 shadow-md hover:shadow-green-400/40 transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>

                <a
                  href="https://email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/70 rounded-lg hover:bg-emerald-500 shadow-md hover:shadow-green-400/40 transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
