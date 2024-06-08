/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',    // Small devices (phones)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
      '2xl': '1536px',  // 2XL devices
      // Custom breakpoints
      'xs': '475px',    // Extra small devices
      '3xl': '1600px',  // Custom large devices
    },
  },
  plugins: [
    require('daisyui'),
  ],
}