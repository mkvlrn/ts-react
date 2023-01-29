import { styled } from './_styled.js';

const StyledTagline = styled.h3`
  text-align: center;
`;

export function Tagline() {
  return (
    <StyledTagline>
      An opinionated, code-quality-first, bare bones template for React projects built with Vite.
    </StyledTagline>
  );
}
