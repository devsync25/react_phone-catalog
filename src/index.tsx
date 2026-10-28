import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { CartProvider } from './context/CartProvider';
import { FavoritesProvider } from './context/FavoritesProvider';

import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </BrowserRouter>,
);
