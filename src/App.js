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

function reducer(state, action) {
  switch (action.type) {
    case "POSTS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "POSTS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

function App() {
  return (
    <div className='div'>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path='/createPost' element={<CreatePost />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
        <Route path='/' element={<Home />} exact />
        <Route path='/product/*' element={<Product />} exact />
      </Routes>
    </div>
  );
}

export default App;
