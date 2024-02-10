import { Outlet } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { Footer } from './components/Footer';

export const App = () => {

  return (
    <>
      <CartProvider>
        <div id='appContainer'>
          <div>
            <Navbar />
            <ItemListContainer greeting={'Bienvenidos'} />
            <Outlet />
          </div>
          <Footer/>
        </div>
      </CartProvider>
    </>
  )
}
