import React from 'react'
//import React Router DOM
import {BrowserRouter as Router, Route, Routes} from'react-router-dom'
//Import Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//Import Components
import CartItem from './components/Cartitem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
