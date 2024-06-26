/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],

      },
      screens: {
        'xs': '480px',
        'sm': '640px',   
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px', 
        '2xl': '1800px', 
      },
    },
  },
  plugins: [],
};
