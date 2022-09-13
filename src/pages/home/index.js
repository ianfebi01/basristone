import { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import ProductPreview from "../../components/home/productPreview";
import Testimoni from "../../components/home/testimoni";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Gap from "../../helpers/Gap";

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
      <Header headerSmall={headerSmall} />
      <div ref={myRef} className='ref-header'></div>
      <div className='content-1'>
        <div className='content-body tes'>
          <div className='top'>
            <h1>Batu Alam Ukir.</h1>
            <h1>Hiasan Dinding.</h1>
            <h1>Kerajinan Batu Alam.</h1>
          </div>
          <div className='mid'>
            <p className='text'>
              Selamat datang di Basristone yang melayani pemesanan dan menjual
              berbagai macam kerajinan ukir batu alam.
            </p>
          </div>
          <div className='btm'>
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
      </div>
      <div className='content-2'>
        <div className='content-body'>
          <ProductPreview />
          <Gap h='40px' />
          <div className='selengkapnya'>
            <span className='textDark'>Selengkapnya</span>
            <FontAwesomeIcon icon={faArrowRight} className='arrow' />
          </div>
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
