/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nabla: "'Nabla',serif",
        pixel: "'DotGothic16',monospace",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 0.7, // Adjust opacity as desired
            transform: "scale(1.1)", // Adjust scaling factor as desired
          },
        },
      },
    },
  },
  plugins: [],
}
