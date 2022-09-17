import ProductPreviewSingle from "./ProductPreviewSingle";
import "./style.css";
export default function ProductPreview({ posts }) {
  return (
    <>
      <div className='box-3'>
        {posts?.slice(0, 3).map((item, i) => (
          <ProductPreviewSingle key={i} posts={item} />
        ))}
      </div>
    </>
  );
}
