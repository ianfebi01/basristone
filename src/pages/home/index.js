import { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import ProductPreview from "../../components/home/productPreview";
import Testimoni from "../../components/home/testimoni";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Gap from "../../helpers/Gap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./style.css";
import BurgerMenu from "../../components/burgerMenu/BurgerMenu";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasristoneBrand from "../../components/home/content1/BasristoneBrand";
import BasristoneBrand2 from "../../components/home/content1/BasristoneBrand2";

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

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 6000,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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

        {/* Slider */}
        <div className='home-slider'>
          <Slider {...settings}>
            <BasristoneBrand />
            <BasristoneBrand2 />
          </Slider>
        </div>
        {/* Slider */}

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
