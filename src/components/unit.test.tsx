import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Github } from './github.js';
import { Logo } from './logo.js';
import { Tagline } from './tagline.js';
import { Title } from './title.js';

describe('all components', () => {
  test('github.tsx', () => {
    render(<Github />);

    const github = screen.getByRole('link');

    expect(github).toBeInTheDocument();
    expect(github).toHaveTextContent('View on Github');
  });

  test('logo.tsx', () => {
    render(<Logo />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
  });

  test('tagline.tsx', () => {
    render(<Tagline />);

    const tagline = screen.getByRole('heading');

    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveTextContent(
      'An opinionated, code-quality-first, bare bones template for React projects built with Vite.',
    );
  });

  test('title.tsx', () => {
    render(<Title />);

    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('React typescript template');
  });
});
