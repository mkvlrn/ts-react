import { Global, css } from '@emotion/react';
import normalize from 'normalize.css';

export function GlobalStyle() {
  const styles = css`
    ${normalize}
    body {
      background-color: #2f4858;
      color: #daf7dc;
      height: 100%;
      font-family: Signika;
    }

    main {
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  return <Global styles={styles} />;
}
