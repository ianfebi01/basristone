import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
export default function BurgerMenu({ setShowBurger }) {
  const location = useLocation();
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div className='burger-menu'>
      <header className='header-small shadow-1'>
        <div className='header-container'>
          <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
            <h1 className={`brand-logo is-blue`}>Basristone</h1>
          </Link>
          <div
            className='close-icon is-blue'
            onClick={() => setShowBurger(false)}
          >
            <FontAwesomeIcon icon={faXmark} size='2x' />
          </div>
        </div>
      </header>
      <div className='menu'>
        <div className='header-menu'>
          <Link to='/product' className='item'>
            Produk
          </Link>
          <Link to='/product/relief' className='item'>
            Relief
          </Link>
          <Link to='/product/patung' className='item'>
            Patung
          </Link>
          <Link to='/product/lampion' className='item'>
            Lampion
          </Link>
          <Link to='/product/ornamen' className='item'>
            Ornamen
          </Link>
          <Link to='/product/patung' className='item'>
            Roster
          </Link>
          <Link to='/product/patung' className='item'>
            Pilar
          </Link>
        </div>
        {user && location.pathname !== "/dashboard" ? (
          <Link to='/dashboard'>
            <button className='btn-2'>Dashboard</button>
          </Link>
        ) : location.pathname === "/dashboard" ? (
          <button
            className='btn-2'
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : (
          <Link to='/login'>
            <button className='btn-2'>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
