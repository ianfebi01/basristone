import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Routes, Route } from "react-router-dom";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import Gap from "../../helpers/Gap";
import AllProduct from "./AllProduct";
import AllTestimoni from "./AllTestimoni";
import Post from "./Post";
import "./style.css";

export default function Product({ posts }) {
  const [showBurger, setShowBurger] = useState(false);

  const isMediumScreen = useMediaQuery({
    query: "(max-width: 1031px)",
  });
  return (
    <div className='main'>
      {showBurger && isMediumScreen && (
        <BurgerMenu setShowBurger={setShowBurger} showBurger={showBurger} />
      )}
      <Header setShowBurger={setShowBurger} />
      <Routes>
        <Route
          path=''
          element={
            <AllProduct
              posts={posts.filter((item) =>
                item.type.toLowerCase().includes("product")
              )}
            />
          }
          exact
        />
        <Route
          path='/:category'
          element={
            <AllProduct
              posts={posts.filter((item) =>
                item.type.toLowerCase().includes("product")
              )}
            />
          }
          exact
        />
        <Route
          path='/:category/:id'
          element={
            <Post
              posts={posts.filter((item) =>
                item.type.toLowerCase().includes("product")
              )}
            />
          }
          exact
        />
        <Route
          path='/testimoni'
          element={
            <AllTestimoni
              posts={posts.filter((item) =>
                item.type.toLowerCase().includes("testimoni")
              )}
            />
          }
          exact
        />
        <Route
          path='/testimoni/:id'
          element={
            <Post
              posts={posts.filter((item) =>
                item.type.toLowerCase().includes("testimoni")
              )}
            />
          }
          exact
        />
      </Routes>
      <div className='content-4'>
        <div className='content-body'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
