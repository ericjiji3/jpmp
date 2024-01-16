/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      xl: '1.75rem',
      '2xl': '2.125rem',
      '3xl': '2.688rem',
      '4xl': '3.375rem',
      '5xl': '4.25rem',
    },
    dropShadow: {
      md : '10px 10px 0px rgba(0, 0, 0)',
      sm : '-10px 10px 0px rgba(0, 0, 0)'
    },
    keyframes: {
      swipe: {
        '0%': { transform: 'translate(0)' },
        '100%': { transform: 'translate(-100%)' },
      },
      swipeRev: {
        '0%': { transform: 'translate(0)' },
        '100%': { transform: 'translate(100%)' },
      }
    }
  },
  plugins: [],
}
