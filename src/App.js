import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
function App() {
  return (
    <>
      <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
