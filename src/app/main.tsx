import { GlobalStyle } from '#/app/main.style.jsx';
import { Github } from '#/components/github.jsx';
import { Logo } from '#/components/logo.jsx';
import { Tagline } from '#/components/tagline.jsx';
import { Title } from '#/components/title.jsx';

export function App() {
  return (
    <main>
      <GlobalStyle />
      <Title />
      <Tagline />
      <Logo />
      <Github />
    </main>
  );
}
