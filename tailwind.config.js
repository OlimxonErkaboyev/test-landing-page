/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sizning fayllaringiz joylashgan papkalarni qo'shing
  ],
  theme: {
    extend: {
      fontFamily: {
        future: ["Future PT", "sans-serif"],
      },
      colors: {
        "bg-color": "#2F2F2F",
        "text-color": "#601FEB",
        "services-bg": "#151515",
        "border-color": "#7C7C7C1F",
      },
      fontSize: {
        "7xl": "62px", // Misol uchun, 7x extra large o'lchami
      },
      lineHeight: {
        "extra-loose": "70px", // Misol uchun, juda yumshoq balandlik
      },
      backgroundImage: {
        "card-bg": `url('/src/assets/images/services/card-bg.svg')`,
        "card-hover-bg": `url('/src/assets/images/services/cardHoverBg.png')`,
      },
    },
  },
  plugins: [],
};
