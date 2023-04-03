import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '#/app/index.jsx';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
