import { GlobalStyle } from '#/app/style';
import { Github } from '#/components/github';
import { Logo } from '#/components/logo';
import { Tagline } from '#/components/tagline';
import { Title } from '#/components/title';

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
