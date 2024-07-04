import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar.jsx';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Jewelery  from './pages/jewelry.jsx';
import Mens from './pages/mens.jsx';
import Womens from './pages/womens.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import { CartProvider } from './context/cart.jsx';


function App() {
  return (
    <>
    <CartProvider>
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Container>
      </CartProvider>
      
    
   
    </>
  );
}

export default App;
