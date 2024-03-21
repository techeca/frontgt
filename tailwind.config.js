/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Regular'],
        bold: ['Bold'],
        extrabold: ['ExtraBold'],
        extralight: ['ExtraLight'],
        light: ['Light'],
        medium: ['Medium'],
        regular: ['Regular'],
        semibold: ['SemiBold']
      },
      backgroundImage: {
        'loginImage': "url('/img/loginfondo.png)"
      }
    },
  },
  plugins: [require('flowbite/plugin')({
    charts: true
  })],
}

