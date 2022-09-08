import "./style.css";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gap from "../../../helpers/Gap";

export default function Footer() {
  return (
    <div className='footer-wrap'>
      <div className='top'>
        <div className='typography'>
          <h1>Basristone</h1>
        </div>
        <div className='typography'>
          <h3>Produk</h3>
          <p>Relief</p>
          <p>Patung</p>
          <p>Lampion</p>
          <p>Ornamen</p>
          <p>Roster</p>
          <p>Pilar</p>
          <p>Batu Alam</p>
        </div>
        <div className='typography'>
          <h3>Pengiriman</h3>
          <p>Indah Logistik Cargo</p>
          <p>Dakota Groub</p>
        </div>
        <div className='typography'>
          <h3>Alamat</h3>
          <p>
            RT 02, RW 15, Semuluhkidul, Ngeposari, Semanu, Gunungkidul,
            Yogyakarta
          </p>
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-wrap'>
          <span>Builded by ianfebi01</span>
          <Gap h='20px' />
          <div className='icon'>
            <a href='https://twitter.com/ianfebi01'>
              <FontAwesomeIcon icon={faTwitter} size='lg' />
            </a>
            <a href='https://www.facebook.com/ianfebi01/'>
              <FontAwesomeIcon icon={faFacebook} size='lg' />
            </a>
            <a href='https://www.instagram.com/ianfebi01/'>
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </a>
            <a href='https://github.com/ianfebi01'>
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
            <a href='mailto:ianfebi01@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} size='lg' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
