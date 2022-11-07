/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#fff',
      'pDark': '#043873',
      'pLight': '#4F9CF9',
      'sYellow': '#FFE492',
      'sLight': '#A7CEFC',
      'sBlack': '#212529',
      'sYellowHover': '#ffdc72',
      'pLightHover': '#3a8ef5'
    },
    fontFamily: {
      'inter': "Inter"
    }
  },
  plugins: [],
}