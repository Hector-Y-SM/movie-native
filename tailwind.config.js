/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DD",
          300: "#9AC4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
        },
        accent: "#AB8BFF",
        neutral: "#374151",
        base100: "#F9FAFB",
        info: "#3B82F6",
        success: "#10B981",
        warning: "#FBBF24",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
}