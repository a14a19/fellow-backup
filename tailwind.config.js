/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-hero': { 'min': '980px' },
        'md-hero': { 'min': '550px' },
      }
    },
  },
  plugins: [],
}

