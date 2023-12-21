import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </>
  )
}

export default App
