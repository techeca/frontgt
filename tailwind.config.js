/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
import animated from 'tailwindcss-animated'

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
        semibold: ['SemiBold']
      },
      backgroundImage: {
        'loginImage': "url('/img/loginfondo.png)"
      }
    },
  },
  plugins: [
    flowbitePlugin({charts: true}),
    animated
],
}

