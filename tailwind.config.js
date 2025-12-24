module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "24px 24px" },
        },
      },
      animation: {
        gridMove: "gridMove 6s linear infinite",
      },
    },
  },
};
