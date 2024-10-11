import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import ImageUpload from "./subcomponent/ImageUpload";
import QuantityUpload from './subcomponent/QuantityUpload';
import NameUpload from './subcomponent/NameUpload';
import PriceUpload from './subcomponent/PriceUpload';
import ProductOverview from './subcomponent/ProductOverview';
import ProductList from "../MyProduct/ProductList";
import App from "../App";
function AddProductHome() {
  const [info, setInfo] = useState({
    name: "",
    quantity: "",
    price: "",
  });
  return (
    <Routes>
      <Route path="/" element={<AddProduct />} />
      <Route path="/imageupload" element={<ImageUpload />} />
      <Route path="/nameupload" element={<NameUpload info={info} setInfo={setInfo} />} />
      <Route path="/quantityupload" element={<QuantityUpload  info={info} setInfo={setInfo} />} />

      <Route path="/overviewproduct" element={<ProductOverview  info={info} setInfo={setInfo} />} />
      <Route path="/priceupload" element={<PriceUpload  info={info} setInfo={setInfo} />} />
      <Route path="/productlist" element={<ProductList  info={info} />} />
      <Route path="/home" element={<App />} />
      

    </Routes>
  );
}

export default AddProductHome;
