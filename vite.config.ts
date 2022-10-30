/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: './src',
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
    },
  },
  base: '',
  build: {
    outDir: 'build',
  },
});
