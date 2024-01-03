/** @type {import type ('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// biome-ignore lint/nursery/noDefaultExport: postcss.config.ts is a config file
export default config;
