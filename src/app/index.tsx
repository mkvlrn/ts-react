import { Github } from '../components/github.js';
import { Logo } from '../components/logo.js';
import { Tagline } from '../components/tagline.js';
import { Title } from '../components/title.js';
import { GlobalStyle } from './style.js';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Tagline />
      <Logo />
      <Github />
    </>
  );
}
