/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', 'sans-serif'],
			},
      colors: {
        'card-bg': '#112949',
        'card-head': '#3CC3F2',
        'card-body': '#FFFFFF',
        'submit-btn': '#EA7B2C'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1350px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

