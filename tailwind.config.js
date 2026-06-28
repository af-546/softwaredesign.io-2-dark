/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050509",
          surface: "#0a0a12",
          elevated: "#12121c",
        },
        ink: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
        accent: {
          DEFAULT: "#4f46e5",
          soft: "#6366f1",
          subtle: "rgba(79, 70, 229, 0.15)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
        },
      },
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "Inter", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 70, 229, 0.35)",
        soft: "0 12px 40px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
