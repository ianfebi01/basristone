import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Gap from "../../../helpers/Gap";

export default function ProductPreview() {
  return (
    <>
      <div className='box-3'>
        <div className='box'>
          <img src='../../../images/BG.png' alt='' />
          <div className='typography'>
            <h2>Batu Ukir Jogja</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It{" "}
            </p>
          </div>
          <div className='btn-wrap'>
            <button className='btn-2'>Selengkapnya</button>
          </div>
        </div>
        <div className='box'>
          <img src='../../../images/BG.png' alt='' />
          <div className='typography'>
            <h2>Batu Ukir Jogja</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It{" "}
            </p>
          </div>
          <div className='btn-wrap'>
            <button className='btn-2'>Selengkapnya</button>
          </div>
        </div>
        <div className='box'>
          <img src='../../../images/BG.png' alt='' />
          <div className='typography'>
            <h2>Batu Ukir Jogja</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It{" "}
            </p>
          </div>
          <div className='btn-wrap'>
            <button className='btn-2'>Selengkapnya</button>
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
