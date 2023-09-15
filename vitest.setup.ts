import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// @ts-expect-error, jest-dom types are not exported as default
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
