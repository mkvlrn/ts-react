import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig as baseDefineConfig } from 'vite';
import { mergeConfig, defineConfig as testDefineConfig } from 'vitest/dist/config.js';

const baseConfig = baseDefineConfig({
  plugins: [react()],
  root: './src',
  resolve: {
    alias: { '#': resolve('.', './src') },
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});

export default mergeConfig(
  baseConfig,
  testDefineConfig({
    test: {
      root: '.',
      alias: { '#': resolve('.', './src') },
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
  }),
);
