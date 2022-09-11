import "./style.css";

export default function ProductPreviewSingle() {
  return (
    <div className='box'>
      <img src='../../../images/BG.png' alt='' />
      <div className='typography'>
        <h2>Batu Ukir Jogja</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It{" "}
        </p>
      </div>
      <div className='btn-wrap'>
        <button className='btn-2'>Selengkapnya</button>
      </div>
    </div>
  );
}
