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
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-15px)" }, // Reduced bounce height
          "60%": { transform: "translateY(-10px)" }, // Reduced bounce height
        },
      },
    },
  },
  plugins: [],
}
