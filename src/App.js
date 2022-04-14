import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <div className='btnListDetail'>
        <Link className='menu' to="/list">List</Link>
        <Link className='menu' to="/detail">Detail</Link>
      </div>
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="Welcome to Skullcandy headphone store!" />} />
      <Route path="/list" element={<ItemListContainer greeting="Welcome to Skullcandy headphone store!" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Welcome to Skullcandy headphone store!" />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error 404 not found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;