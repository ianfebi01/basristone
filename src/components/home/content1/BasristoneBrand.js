import { Link } from "react-router-dom";

export default function BasristoneBrand() {
  return (
    <div className='content-1'>
      <div className='content-body'>
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
