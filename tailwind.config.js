/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#020617",
        terminal: "#08111f",
        acid: "#34d399",
        aqua: "#22d3ee",
        violet: "#a855f7",
      },
      boxShadow: {
        glow: "0 0 42px rgba(34, 211, 238, 0.18)",
        green: "0 0 36px rgba(52, 211, 153, 0.20)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        scan: "scan 7s linear infinite",
        blink: "blink 1s steps(2, start) infinite",
      },
    },
  },
  plugins: [],
};
