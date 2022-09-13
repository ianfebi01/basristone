import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ headerSmall }) {
  const isMediumScreen = useMediaQuery({
    query: "(max-width: 1031px)",
  });
  const isPhone = useMediaQuery({
    query: "(max-height: 667px)",
  });
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
          <div className='burger'>
            <FontAwesomeIcon icon={faBars} size={`${isPhone ? "1x" : "2x"}`} />
          </div>
        ) : (
          <>
            <div className='header-menu'>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Relief
              </a>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Patung
              </a>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Lampion
              </a>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Ornamen
              </a>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Roster
              </a>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Pilar
              </a>
              <a href='#' className={`${!headerSmall ? "item" : ""}`}>
                Batu Alam
              </a>
            </div>
            <button className={`${!headerSmall ? "btn-2" : "btn-1"}`}>
              Contact
            </button>
          </>
        )}
      </div>
    </header>
  );
}
