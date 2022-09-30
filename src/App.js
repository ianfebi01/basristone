import { Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

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

  const location = useLocation();

  return (
    <div
      className='div'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {loading && (
        <motion.div className='loading'>
          <h1 className='loading-text' loading-text='Basristone'>
            Basristone
          </h1>
        </motion.div>
      )}
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
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
