import { Outlet } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { CartProvider } from './context/CartContext';

export const App = () => {

  return (
    <>
      <CartProvider>
        <Navbar />
        <ItemListContainer greeting={'Bienvenidos'} />
        <Outlet />
      </CartProvider>
    </>
  )
}
