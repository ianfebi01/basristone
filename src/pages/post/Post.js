import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useClickOutside from "../../helpers/clickOutside";
import Gap from "../../helpers/Gap";

export default function Post({ posts }) {
  const id = useParams();
  const postById = posts.filter((item) => item._id === id.id)[0];

  const [previewImage, setpreviewImage] = useState(false);

  const imageRef = useRef(null);

  useClickOutside(imageRef, () => {
    setpreviewImage(false);
  });
  return (
    <>
      {previewImage && (
        <div className='preview-image'>
          <div className='circle' onClick={() => setpreviewImage(false)}>
            <FontAwesomeIcon icon={faXmark} className='close' />
          </div>
          <img src={postById?.images} alt='' ref={imageRef} />
        </div>
      )}
      <div className='content-post'>
        <div className='content-post-body'>
          <div className='post-wrapper'>
            <Gap h='80px' />
            <h1>{postById?.header}</h1>
            <Gap h='30px' />
            <div className='img-wrapper'>
              <img
                src={postById?.images}
                alt=''
                onClick={() => setpreviewImage(true)}
              />
              <Gap h='20px' />
              <span>Klik gambar untuk memperbesar gambar.</span>
            </div>
            <Gap h='30px' />
            <div className='typography'>
              <div className='typography-body'>
                <p>{postById.body}</p>
              </div>
            </div>
            <Gap h='80px' />
          </div>
        </div>
      </div>
    </>
  );
}
