/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1e1f1e",
          200: "#1d1b1b",
        },
        secondary: {
          100: "#2593f8",
        },
        app_white: "#fdfcfc",
        // secondary: "#151312",
        // light: {
        //   100: "#D6C6FF",
        //   200: "#A8B5DB",
        //   300: "#9CA4AB",
        // },
        // dark: {
        //   100: "#221F3D",
        //   200: "#0f0D23",
        // },
        // accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
