import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Gap from "../../../helpers/Gap";
import { Link } from "react-router-dom";

export default function Testimoni({ posts }) {
  return (
    <>
      <div className='box-2'>
        <div className='left'>
          <img src={posts?.images} alt='' />
        </div>
        <div className='right'>
          <div className='typography'>
            <h1>{posts?.header}</h1>
            <p>{posts?.body}</p>
            <span>{posts?.category}</span>
          </div>
        </div>
      </div>
      <Gap h='30px' />
      <Link to='/product/testimoni'>
        <div className='selengkapnya'>
          <span className='textDark'>Selengkapnya</span>
          <FontAwesomeIcon icon={faArrowRight} className='arrow' />
        </div>
      </Link>
    </>
  );
}
