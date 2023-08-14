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
        primary: "#6F68D7", // 240,86,199
        primaryDark: "#6F68D7", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#EEEEEE 5px,#EEEEEE 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#222831 8px,#222831 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#EEEEEE 5px,#EEEEEE 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#222831 8px,#222831 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#EEEEEE 5px,#EEEEEE 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#222831 6px,#222831 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#EEEEEE 5px,#EEEEEE 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#222831 4px,#222831 40px)",

      }
    },
    screens:{
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
    
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
    
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
    
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

