import { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import ProductPreview from "../../components/home/productPreview";
import Testimoni from "../../components/home/testimoni";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Gap from "../../helpers/Gap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";

export default function Home({ posts }) {
  const myRef = useRef();

  const [headerSmall, setHeaderSmall] = useState();
  const [showBurger, setShowBurger] = useState(false);

  const isMediumScreen = useMediaQuery({
    query: "(max-width: 1031px)",
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderSmall(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div>
      <div className='main'>
        {showBurger && isMediumScreen && (
          <BurgerMenu setShowBurger={setShowBurger} headerSmall={headerSmall} />
        )}
        <div ref={myRef} className='ref-header'></div>
        <Header
          headerSmall={headerSmall}
          setShowBurger={setShowBurger}
          showBurger={showBurger}
        />
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
                <Link to='/product'>
                  <button className='btn-1'>Lihat Contoh</button>
                </Link>
                <a
                  href='
              https://wa.me/6281806664433'
                >
                  <button className='btn-1'>WhatsApp Kami Sekarang</button>
                </a>
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
            <ProductPreview
              posts={posts?.filter((item) =>
                item.type.toLowerCase().includes("product")
              )}
            />
            <Gap h='30px' />
            <Link to='/product'>
              <div className='selengkapnya'>
                <span className='textDark'>Selengkapnya</span>
                <FontAwesomeIcon icon={faArrowRight} className='arrow' />
              </div>
            </Link>
          </div>
        </div>
        <div className='content-3'>
          <div className='content-body'>
            <Testimoni
              posts={
                posts?.filter((item) =>
                  item.type.toLowerCase().includes("testimoni")
                )[0]
              }
            />
            <Link to='/product/testimoni'>
              <div className='selengkapnya'>
                <span className='textDark'>Selengkapnya</span>
                <FontAwesomeIcon icon={faArrowRight} className='arrow' />
              </div>
            </Link>
          </div>
        </div>
        <div className='content-4'>
          <div className='content-body'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
