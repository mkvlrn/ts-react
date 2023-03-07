import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: { '#': resolve(__dirname, './src') },
    coverage: { reportsDirectory: 'coverage', include: ['src/**'], reporter: ['lcov', 'html'] },
    environment: 'jsdom',
    passWithNoTests: true,
    setupFiles: ['vitest.setup.ts'],
  },
});
