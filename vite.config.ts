import { resolve } from 'node:path';
import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react';
import { defineConfig as baseDefineConfig } from 'vite';
import { defineConfig as testDefineConfig, mergeConfig } from 'vitest/dist/config.js';

const baseConfig = baseDefineConfig({
  root: './src',
  plugins: [
    react(),
    generouted({
      source: {
        routes: './src/pages/**/*.tsx',
        modals: './src/pages/**/[+]*.tsx',
      },
      output: './src/routes.ts',
    }),
  ],
  resolve: {
    alias: { '#': resolve('.', './src') },
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    open: true,
  },
});

const testConfig = testDefineConfig({
  test: {
    alias: { '#': resolve('.', './src') },
    coverage: {
      reportsDirectory: 'coverage',
      reporter: ['lcov', 'html', 'text'],
      all: true,
      include: ['src/**/*'],
      exclude: ['src/index.tsx', '**/*.test.tsx', '**/*.d.ts'],
    },
    env: {
      // biome-ignore lint/style/useNamingConvention: convention
      NODE_ENV: 'test',
    },
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});

// biome-ignore lint/nursery/noDefaultExport: vite.config.ts is a config file
export default mergeConfig(baseConfig, testConfig);
