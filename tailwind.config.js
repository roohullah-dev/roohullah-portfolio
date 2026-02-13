extend: {
  animation: {
    lightMove: "lightMove 4s linear infinite",
  },
  keyframes: {
    lightMove: {
      "0%": { left: "-50%" },
      "100%": { left: "100%" },
    },
  },
}

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // For headings
        body: ['Inter', 'sans-serif'],      // For paragraphs
      },
    },
  },
};
