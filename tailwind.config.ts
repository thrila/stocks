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
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)']
      },
      backgroundImage: {
        'chartImage': "url('/stock-image.png')"
      },
    },

    colors: {
      'gold': '#FFD700',
      'white': '#FBFCF8',
      'black': '#0B0c10',
      'ash': '#B2BEB5',
      'charcoal': '#1F2833',
      'header': '#D0A2F7',
      'cards': '#DCBFFF',
      'hover': '#E5D4FF',
    },

  },
  plugins: [],
}
export default config
