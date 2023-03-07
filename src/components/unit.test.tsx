/* eslint-disable vitest/no-hooks */
import { cleanup, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { Github } from '#/components/github.jsx';
import { Logo } from '#/components/logo.jsx';
import { Tagline } from '#/components/tagline.jsx';
import { Title } from '#/components/title.jsx';

describe('all components', () => {
  beforeEach(() => {
    cleanup();
  });

  it('github.tsx', () => {
    render(<Github />);

    const github = screen.getByRole('link');

    expect(github).toBeInTheDocument();
    expect(github).toHaveTextContent('View on Github');
  });

  it('logo.tsx', () => {
    render(<Logo />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
  });

  it('tagline.tsx', () => {
    render(<Tagline />);

    const tagline = screen.getByRole('heading');

    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveTextContent(
      'An opinionated, code-quality-first, bare bones template for React projects built with Vite.',
    );
  });

  it('title.tsx', () => {
    render(<Title />);

    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('React typescript template');
  });
});
