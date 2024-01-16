import { Outlet } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

export const App = () => {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <Outlet />
    </>
  )
}
