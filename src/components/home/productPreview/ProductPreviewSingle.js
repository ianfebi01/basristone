import { useNavigate } from "react-router-dom";
import "./style.css";

export default function ProductPreviewSingle({ posts }) {
  const navigate = useNavigate();
  return (
    <div className='box'>
      <img src={posts.images} alt='' />
      <div className='typography'>
        <h2>{posts.header}</h2>
        {posts.body.length >= 200 ? (
          <p>{posts.body.substring(0, 200)}.....</p>
        ) : (
          <p>{posts.body.substring(0, 200)}</p>
        )}
      </div>
      <div className='btn-wrap'>
        <button
          className='btn-2'
          onClick={() =>
            navigate(
              `/product/${
                posts.type === "testimoni" ? posts.type : posts.category.id
              }/${posts._id}`
            )
          }
        >
          Selengkapnya
        </button>
      </div>
    </div>
  );
}
