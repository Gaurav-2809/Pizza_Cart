import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
function App() {
  return (
    <>
      <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:id" exact element={<SingleProduct/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
