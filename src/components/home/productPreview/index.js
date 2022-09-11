import ProductPreviewSingle from "./ProductPreviewSingle";
import "./style.css";
export default function ProductPreview() {
  return (
    <>
      <div className='box-3'>
        <ProductPreviewSingle />
        <ProductPreviewSingle />
        <ProductPreviewSingle />
      </div>
    </>
  );
}
