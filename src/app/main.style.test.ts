import { expect, test } from 'vitest';
import { GlobalStyle } from '#/app/main.style.jsx';

test('defined', () => {
  const result = GlobalStyle();

  expect(result).toBeDefined();
});
