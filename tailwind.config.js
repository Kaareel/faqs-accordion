/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: 'hsl(275, 100%, 97%)', titleColor: 'hsl(292, 42%, 14%)', textColorHover: '#ad28eb', textColor: 'hsl(292, 16%, 49%)'
      }
    },
  },
  plugins: [],
}

