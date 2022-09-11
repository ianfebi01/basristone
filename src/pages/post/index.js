import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import Gap from "../../helpers/Gap";
import AllProduct from "./AllProduct";
import Post from "./Post";
import "./style.css";

export default function Product() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='' element={<AllProduct />} exact />
        <Route path='tt' element={<Post />} />
      </Routes>
      <div className='content-4'>
        <div className='content-body'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
