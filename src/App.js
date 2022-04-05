import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to Skullcandy headphone store!" />
      <ItemCount stock={25} />
    </>
  );
}

export default App;