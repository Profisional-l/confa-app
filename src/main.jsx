import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { SDKProvider } from '@telegram-apps/sdk-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SDKProvider acceptCustomStyles debug>
      <App />
    </SDKProvider>
  </StrictMode>,
);
