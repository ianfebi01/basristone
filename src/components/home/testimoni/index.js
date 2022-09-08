import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Gap from "../../../helpers/Gap";

export default function Testimoni() {
  return (
    <>
      <div className='box-2'>
        <div className='left'>
          <img src='../../../images/BG.png' alt='' />
        </div>
        <div className='right'>
          <div className='typography'>
            <h1>Testimonial</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It{" "}
            </p>
            <span>Pemasangan Batu Ukir Dinding di Bali</span>
          </div>
        </div>
      </div>
      <Gap h='40px' />
      <div className='selengkapnya'>
        <span className='textDark'>Selengkapnya</span>
        <FontAwesomeIcon icon={faArrowRight} className='arrow' />
      </div>
    </>
  );
}
