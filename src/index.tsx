import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '#/app/main.jsx';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
