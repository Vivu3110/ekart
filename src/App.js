import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Product from './component/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/products" element={<Products/>}/> 
        <Route  path="/products/:id" element={<Product/>}/> 
      </Routes>
    </>
  );
}

export default App;
