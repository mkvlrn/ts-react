import type { Config } from 'tailwindcss';

const config: Config = {
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

// biome-ignore lint/nursery/noDefaultExport: tailwind.config.ts is a config file
export default config;
