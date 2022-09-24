import React, { useState } from "react";
import Header from "../../components/header";
import "./style.css";
import DashboardPage from "./DashboardPage";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/home/footer";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import Loading from "./Loading";
import AllProductDashboard from "./AllProductDaashboard";
import AllTestimoniDashboard from "./AllTestimoniDashboard";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";

export default function Dashboard({ dispatchFunction, posts }) {
  const [showBurger, setShowBurger] = useState(false);
  const [headerSmall, setHeaderSmall] = useState();
  const isMediumScreen = useMediaQuery({
    query: "(max-width: 1031px)",
  });
  return (
    <div className='main'>
      {showBurger && isMediumScreen && (
        <BurgerMenu setShowBurger={setShowBurger} headerSmall={headerSmall} />
      )}
      <Header setShowBurger={setShowBurger} />
      <Routes>
        <Route
          path=''
          element={
            <DashboardPage dispatchFunction={dispatchFunction} posts={posts} />
          }
          exact
        />
        <Route
          path='/createPost'
          element={
            <CreatePost posts={posts} dispatchFunction={dispatchFunction} />
          }
          exact
        />
        <Route
          path='/editPost/:id'
          element={
            <EditPost posts={posts} dispatchFunction={dispatchFunction} />
          }
          exact
        />
        <Route
          path='/all/:category'
          element={
            <AllProductDashboard
              dispatchFunction={dispatchFunction}
              posts={posts.filter((item) =>
                item.type.toLowerCase().includes("product")
              )}
            />
          }
          exact
        />
        <Route
          path='/all'
          element={
            <AllProductDashboard
              dispatchFunction={dispatchFunction}
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
            <AllTestimoniDashboard
              dispatchFunction={dispatchFunction}
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
