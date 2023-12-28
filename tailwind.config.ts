import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-roboto)'],
        sans: ['var(--font-amiko)']
      },
      // colors: {
      //   'green-default': '#10B981',
      //   'green-light': '#17c118',
      //   'green-dark': '#348312',
      //   'red-default': '#E53E3E',
      //   'red-light': '#FC8D8D',
      //   'red-dark': '#C0392B',
      //   'yellow-default': '#F9C744',
      //   'yellow-light': '#FFE8A1',
      //   'yellow-dark': '#D2B48C',
      //   'blue-default': '#5352ED',
      //   'blue-light': '#A4A3F6',
      //   'blue-dark': '#3B3CC6',
        
      // }
    },
  },
  plugins: [],
}
export default config
