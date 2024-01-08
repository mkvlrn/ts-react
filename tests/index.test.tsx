import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from '#/pages/index.jsx';

test('it works', () => {
  render(<Home />);

  const app = screen.getByRole('main');

  expect(app).toBeInTheDocument();
});
