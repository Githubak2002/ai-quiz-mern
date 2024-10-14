/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // card border animation
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },

      // ==== google fonts ====
      fontFamily: {
        zeyada: ['Zeyada', 'cursive'],
        space: ['Space Mono', 'monospace'],
        playwrite: ['Playwrite GB S', 'sans-serif'],
        blackOps: ['Black Ops One', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      },

    },
  },
  plugins: [],
}