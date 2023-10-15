/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nabla: "'Nabla',serif",
        dm: "'DM Mono',monospace",
      },
    },
  },
  plugins: [],
}
