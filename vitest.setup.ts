import matchers from '@testing-library/jest-dom/matchers.js';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// @ts-expect-error, default import or w/e
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
