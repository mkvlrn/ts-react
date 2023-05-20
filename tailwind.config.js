/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      keyframes: {
        logoSpin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        logoSpin: 'logoSpin 20s linear infinite',
      },
    },
    plugins: [],
    fontFamily: {
      sans: ['Signika', 'sans-serif'],
    },
  },
};
