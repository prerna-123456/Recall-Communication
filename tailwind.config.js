/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#182885",
          deep: "#0D1550",
          light: "#2B3FA8",
        },
        signal: {
          DEFAULT: "#EB0000",
          dim: "#B50000",
        },
        paper: "#FAF9F6",
        ink: "#151519",
        amber: "#FFB800",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
        kannada: ["'Noto Sans Kannada'", "sans-serif"],
      },
      boxShadow: {
        sign: "0 0 18px rgba(235,0,0,0.55), 0 0 40px rgba(235,0,0,0.25)",
        signBlue: "0 0 18px rgba(43,63,168,0.6), 0 0 40px rgba(43,63,168,0.3)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "92%": { opacity: 1 },
          "93%": { opacity: 0.4 },
          "94%": { opacity: 1 },
          "96%": { opacity: 0.6 },
          "97%": { opacity: 1 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        flicker: "flicker 6s infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
