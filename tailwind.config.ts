import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'void-landscape': "url('/assets/images/japanese cyberpunk.jpg')",
        'bean-scene': "url('/assets/Bean Scene/hero.png')",
      },
      fontFamily: {
        cyberpunk: ['cyberpunk', 'sans-serif'],
        'blade-runner': ['blade-runner', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        'playfair-400': ['Playfair Display', 'serif', '400'],
        'playfair-500': ['Playfair Display', 'serif', '500'],
        'playfair-700': ['Playfair Display', 'serif', '700'],
      },
      colors: {
        'punk-yellow': '#ECE64D',
        bean: {
          coffe: '#603809',
          ash: '#707070',
        },
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const shadowUtilities = {}
      const textUtilities = {}
      const colors = theme('colors')

      for (let color in colors) {
        if (typeof colors[color] === 'object') {
          const col1 = colors[color]['500']
          const col2 = colors[color]['700']
          shadowUtilities[`.shadow-neon-${color}`] = {
            boxShadow: `0 0 5px ${col1}, 0 0 20px ${col2}`,
          }
          textUtilities[`.text-neon-${color}`] = {
            textShadow: `0 0 5px ${col1}, 0 0 20px ${col2}`,
          }
          addUtilities([shadowUtilities, textUtilities])
        }
      }
    }),
  ],
}
export default config
