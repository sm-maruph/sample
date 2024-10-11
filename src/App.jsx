import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ProductList from './MyProduct/ProductList';
import AddProductHome from './AddProduct/AddProductHome';
import OrderList from './OrderList/OrderList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product/*" element={<AddProductHome />} />
        <Route path="/order-list" element={<OrderList />} />
      </Routes>
    </Router>
  );
}

export default App;
