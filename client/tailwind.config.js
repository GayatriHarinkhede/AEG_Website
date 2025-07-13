// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'aurora': 'aurora 15s ease infinite',
        'aurora-reverse': 'aurora-reverse 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
        'aurora': {
          '0%, 100%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg)'
          },
          '50%': {
            transform: 'translateX(50%) translateY(50%) rotate(180deg)'
          },
        },
        'aurora-reverse': {
          '0%, 100%': {
            transform: 'translateX(50%) translateY(50%) rotate(180deg)'
          },
          '50%': {
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg)'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)'
          },
          '25%': {
            transform: 'translateY(-15px) translateX(15px)'
          },
          '50%': {
            transform: 'translateY(-25px) translateX(-15px)'
          },
          '75%': {
            transform: 'translateY(-15px) translateX(15px)'
          },
        },
      },
    },
  },
  plugins: [],
}