import { cleanup, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import { Github } from '#/components/index/github.js';
import { Logo } from '#/components/index/logo.js';
import { Tagline } from '#/components/index/tagline.js';
import { Title } from '#/components/index/title.js';

describe('all components', () => {
  beforeEach(() => {
    cleanup();
  });

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
