/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrantBlue: '#007BFF',
        brightOrange: '#FF5722',
        sunnyYellow: '#FFEB3B',
        freshGreen: '#4CAF50',
        coolGray: '#607D8B',
        livelyPurple: '#9C27B0',
        darkPurple:'#000319',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
