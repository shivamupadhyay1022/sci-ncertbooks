/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF6B00', // Adjust this to match the NCERT logo color if needed
        }
      },
    },
  },
  plugins: [],
}
