import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@mantine/core/styles.css';
import { AppProviders } from './providers/MantineProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
