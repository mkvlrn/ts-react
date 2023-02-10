import logo from '#/assets/react.svg';
import { styled } from '#/components/_styled.jsx';

const StyledLogo = styled.img`
  @keyframes logoSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  animation: logoSpin 20s linear infinite;
  pointer-events: none;
  max-height: 25rem;
  max-width: 25rem;
  margin: -4rem;
`;

export function Logo() {
  return <StyledLogo src={logo} width='100%' height='100%' alt='React' />;
}
