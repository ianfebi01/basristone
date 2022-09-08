import { useEffect, useRef, useState } from "react";
import Footer from "../../components/home/footer";
import ProductPreview from "../../components/home/productPreview";
import Testimoni from "../../components/home/testimoni";
import "./style.css";

export default function Home() {
  const myRef = useRef();
  const [headerSmall, setHeaderSmall] = useState();
  console.log(headerSmall);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderSmall(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  });
  return (
    <div className='main'>
      <header
        className={`${!headerSmall ? "header-small shadow-1" : "header-big"}`}
      >
        <div className={`header-container ${!headerSmall ? "" : "line"}`}>
          <h1 className={`${!headerSmall ? "is-blue" : "is-white"}`}>
            Basristone
          </h1>
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
        </div>
      </header>
      <div ref={myRef} className='ref-header'></div>
      <div className='content-1'>
        <div className='content-body'>
          <h1>Batu Alam Ukir.</h1>
          <h1>Hiasan Dinding.</h1>
          <h1>Kerajinan Batu Alam.</h1>
          <p className='text'>
            Selamat datang di Basristone yang melayani pemesanan dan menjual
            berbagai macam kerajinan ukir batu alam.
          </p>
          <div className='content-btn'>
            <button className='btn-1'>Lihat Contoh</button>
            <button className='btn-1'>WhatsApp Kami Sekarang</button>
          </div>
          <span>
            <p>Basristone</p>
            <p>ukir batu Jogja.</p>
          </span>
        </div>
      </div>
      <div className='content-2'>
        <div className='content-body'>
          <ProductPreview />
        </div>
      </div>
      <div className='content-3'>
        <div className='content-body'>
          <Testimoni />
        </div>
      </div>
      <div className='content-4'>
        <div className='content-body'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
