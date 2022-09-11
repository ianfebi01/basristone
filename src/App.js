import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import "./App.css";
import Register from "./pages/register";
import Product from "./pages/post";

function App() {
  return (
    <div className='div'>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/register' element={<Register />} exact />
        <Route path='/product/*' element={<Product />} exact />
      </Routes>
    </div>
  );
}

export default App;
