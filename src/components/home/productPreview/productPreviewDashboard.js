import ProductPreviewSingle from "./ProductPreviewSingle";
import ProductPreviewSingleDashboard from "./ProductPreviewSingleDashboard";
import "./style.css";
export default function ProductPreviewDashboard({
  dispatchFunction,
  posts,
  postsData,
}) {
  return (
    <>
      <div className='box-3'>
        {posts?.slice(0, 3).map((item, i) => (
          <ProductPreviewSingleDashboard
            dispatchFunction={dispatchFunction}
            key={i}
            posts={item}
            postsData={postsData}
          />
        ))}
      </div>
    </>
  );
}
