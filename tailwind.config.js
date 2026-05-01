/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        navy: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          500: "#1e3a5f",
          600: "#162d4a",
          700: "#0f1f33",
          800: "#091525",
          900: "#040d16",
        },
        amber: {
          accent: "#f59e0b",
          light:  "#fde68a",
          dark:   "#d97706",
        },
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse at 70% 50%, #1e3a5f 0%, #040d16 70%)",
      },
    },
  },
  plugins: [],
};
