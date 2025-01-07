import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './router/AppRouter.jsx';  // Correct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />  {/* Use the AppRouter here */}
  </StrictMode>
);
