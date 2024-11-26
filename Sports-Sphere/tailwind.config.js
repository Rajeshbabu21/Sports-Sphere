/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(15 23 42)',
        darkGray: 'rgb(11 17 32)',
        card: 'hsl(240deg 2.94% 13.33%)',
        cardover: 'rgb(56 186 244)',
        customColor: 'rgb(203, 153, 81)', // Add your custom color
      },
    },
  },
  plugins: [],
}
