import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function ProductPreviewSingle({ posts }) {
  const navigate = useNavigate();

  return (
    <div className='box'>
      <img src={posts.images} alt='' />
      <div className='typography'>
        {posts.header.lengt < 20 ? (
          <h2>{posts.header}</h2>
        ) : (
          <h2>{posts.header.substring(0, 18)}...</h2>
        )}

        {posts.body.length >= 200 ? (
          <p>{posts.body.substring(0, 200)}.....</p>
        ) : (
          <p>{posts.body.substring(0, 200)}</p>
        )}
      </div>
      <div className='btn-wrap'>
        <Link
          to={`/product/${
            posts.type === "testimoni"
              ? posts.type
              : posts.category.toLowerCase()
          }/${posts._id}`}
        >
          <button className='btn-2'>Selengkapnya</button>
        </Link>
      </div>
    </div>
  );
}
