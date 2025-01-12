export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".transition-cartoon": {
          transition: "all 0.3s ease-out",
        },
        ".transition-cartoon-slow": {
          transition: "all 0.8s ease-out",
        },
        ".flex-between-box": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".flex-center-box": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    },
  ],
};
