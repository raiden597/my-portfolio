/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'horizontal-wave': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'horizontal-wave': 'horizontal-wave 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
