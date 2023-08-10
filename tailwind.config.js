/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
   content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        mont:['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        dark: "#222831",
        light: "#EEEEEE",
        primary: "#00ADB5", // 240,86,199
        primaryDark: "#393E46", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #EEEEEE 5px, #EEEEEE 100px);',
        circularDark:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #222831 8px, #222831 100px);'

      }
    },
  },
  plugins: [],
}

