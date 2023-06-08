import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // @ts-expect-error, because of esm
  plugins: [react()],
  root: './src',
  resolve: {
    alias: { '#': resolve(__dirname, './src') },
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  test: {
    root: '.',
    alias: { '#': resolve(__dirname, './src') },
    coverage: {
      reportsDirectory: 'coverage',
      reporter: ['lcov', 'html', 'text'],
      all: true,
      include: ['src/**/*'],
      exclude: ['src/index.tsx', '**/*.test.tsx', '**/*.d.ts'],
    },
    env: {
      NODE_ENV: 'test',
    },
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: ['vitest.setup.ts'],
  },
});
