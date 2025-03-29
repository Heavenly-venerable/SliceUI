/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#f97316", content: "#ffffff" },
        secondary: "#fed7aa",
        content: "#64748b",
        base: {
          100: "#ffffff",
          200: "#f1f5f9",
          300: "#e2e8f0",
          content: "#1e293b",
        }
      },
    },
  },
  plugins: [],
}

