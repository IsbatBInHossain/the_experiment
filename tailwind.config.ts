import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        cyberpunk: ['cyberpunk', 'sans-serif'],
        'blade-runner': ['blade-runner', 'sans-serif'],
      },
      colors: {
        background: '#2C281F',
        'punk-yellow': '#ECE64D',
      },
    },
  },
  plugins: [],
}
export default config
