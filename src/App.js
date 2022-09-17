import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./App.css";
import Register from "./pages/register";
import Product from "./pages/post";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import Dashboard from "./pages/dashboard";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import CreatePost from "./pages/createPost";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { postsReducer } from "./functions/reducers";
import { useSelector } from "react-redux";

function App() {
  const [{ loading, error, posts }, dispatchFunction] = useReducer(
    postsReducer,
    {
      loading: false,
      posts: [],
      error: "",
    }
  );

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      dispatchFunction({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllPosts`
      );

      dispatchFunction({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatchFunction({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  return (
    <div className='div'>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path='/createPost'
            element={
              <CreatePost dispatchFunction={dispatchFunction} posts={posts} />
            }
            exact
          />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
        <Route path='/' element={<Home posts={posts} />} exact />
        <Route path='/product/*' element={<Product posts={posts} />} exact />
      </Routes>
    </div>
  );
}

export default App;
