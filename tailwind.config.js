/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        "custom-200": "100px",
        "custom-300": "200px",
        "custom-400": "400px",
        "custom-500": "500px",
        "custom-600": "600px",
        "custom-1000": "1000px",
        "custom-1200": "1200px",
      },
      backgroundImage: {
        'background-1': "url('/bg-1.png')",
        'background-1-mobile': "url('/bgmobile.png')",
        'background-2': "url('/bgkonten.png')",
        'background-2-mobile': "url('/bgkontenmobile.png')",
      },
    },
  },
  plugins: [],
};
