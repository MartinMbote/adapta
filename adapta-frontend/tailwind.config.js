/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'adapta-blue': '#054061',  
        'adapta-grey': '#F3F3F3',  
        'adapta-blue-light': '#467184',  
        'green': '#38AE63', 
        'orange': '#F09951', 
        'red': '#E7595A',
      },
    },
  },
  plugins: [],
}