import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./App.css";
import Register from "./pages/register";
import Product from "./pages/post";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import Dashboard from "./pages/dashboard";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import CreatePost from "./pages/dashboard/CreatePost";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { postsReducer } from "./functions/reducers";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      // data
      // dispatch({
      //   type: "GET",
      //   payload: data,
      // });
      // Cookies.set("data", JSON.stringify(data));
      // data
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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path='/dashboard/*'
            element={
              <Dashboard dispatchFunction={dispatchFunction} posts={posts} />
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
