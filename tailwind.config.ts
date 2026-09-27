import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        clay: {
          5: 'var(--color-gray-5)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          850: 'var(--color-gray-850)',
          900: 'var(--color-gray-900)',
        },
        accent: {
          red: 'var(--color-red-600)',
          blueLight: 'var(--color-blue-200)',
          blueDark: 'var(--color-blue-600)',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Arial', 'sans-serif'],
        display: ['var(--font-manrope)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1536px',
      },
      zIndex: {
        card: '103',
        header: '102',
        popup: '101',
      },
    },
  },
  plugins: [],
}
export default config