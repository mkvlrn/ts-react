import matchers, { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers.js';
import { expect } from 'vitest';

declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

// @ts-expect-error, mjs import without proper doc, maybe?
expect.extend(matchers);
