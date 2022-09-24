import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
export default function Header({ headerSmall, showBurger, setShowBurger }) {
  const isMediumScreen = useMediaQuery({
    query: "(max-width: 1031px)",
  });
  const isPhone = useMediaQuery({
    query: "(max-height: 667px)",
  });
  const navigate = useNavigate();

  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  const location = useLocation();

  return (
    <header
      className={`${!headerSmall ? "header-small shadow-1" : "header-big"}`}
    >
      <div className={`header-container ${!headerSmall ? "" : "line"}`}>
        <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
          <h1 className={`brand-logo ${!headerSmall ? "is-blue" : "is-white"}`}>
            Basristone
          </h1>
        </Link>
        {isMediumScreen ? (
          <div
            className={!headerSmall ? "is-primary burger" : "burger"}
            onClick={() => setShowBurger(true)}
          >
            <FontAwesomeIcon icon={faBars} size={`${isPhone ? "1x" : "2x"}`} />
          </div>
        ) : (
          <>
            <div className='header-menu'>
              <Link to='/product' className={`${!headerSmall ? "item" : ""}`}>
                Produk
              </Link>
              <Link
                to='/product/relief'
                className={`${!headerSmall ? "item" : ""}`}
              >
                Relief
              </Link>
              <Link
                to='/product/patung'
                className={`${!headerSmall ? "item" : ""}`}
              >
                Patung
              </Link>
              <Link
                to='/product/lampion'
                className={`${!headerSmall ? "item" : ""}`}
              >
                Lampion
              </Link>
              <Link
                to='/product/ornamen'
                className={`${!headerSmall ? "item" : ""}`}
              >
                Ornamen
              </Link>
              <Link
                to='/product/patung'
                className={`${!headerSmall ? "item" : ""}`}
              >
                Roster
              </Link>
              <Link
                to='/product/patung'
                className={`${!headerSmall ? "item" : ""}`}
              >
                Pilar
              </Link>
            </div>
            {user && location.pathname !== "/dashboard" ? (
              <Link to='/dashboard'>
                <button className={`${!headerSmall ? "btn-2" : "btn-1"}`}>
                  Dashboard
                </button>
              </Link>
            ) : location.pathname === "/dashboard" ? (
              <button
                className={`${!headerSmall ? "btn-2" : "btn-1"}`}
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            ) : (
              <Link to='/login'>
                <button className={`${!headerSmall ? "btn-2" : "btn-1"}`}>
                  Login
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
}
