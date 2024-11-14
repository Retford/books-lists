import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Books } from './Books.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Books />
  </StrictMode>
);
