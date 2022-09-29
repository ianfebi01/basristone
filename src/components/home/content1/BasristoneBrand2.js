import { Link } from "react-router-dom";
import "./style.css";

export default function BasristoneBrand2() {
  return (
    <div className='content-1 content-1-2'>
      <div className='content-body'>
        <div className='top'>
          <h1>Kualitas terbaik.</h1>
          <h1>Harga Bersahabat.</h1>
          <h1>Proses Pengiriman Cepat.</h1>
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
              <button className='btn-1 bordered'>WhatsApp Kami Sekarang</button>
            </a>
          </div>
          <span>
            <p>Basristone</p>
            <p>ukir batu Jogja.</p>
          </span>
        </div>
      </div>
    </div>
  );
}
