/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D24F3',
        secondary: '#AD81FF',
        white: '#F1EFFF',
        dark: '#282157',
        text: '#645F89',
      },
      fontSize: {
        md: '16px',
        lg: '20px',
        xl: '36px',
        xlMobile: '28px',
      },
      backgroundImage: {
        dents: "url('/hero-dents.svg')",
      },
      screens: {
        tablet: '700px',
        laptop: '1100px',
      },
    },
  },
  plugins: [],
}
