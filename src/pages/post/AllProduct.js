import React from "react";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import Gap from "../../helpers/Gap";
import "./style.css";

export default function AllProduct() {
  return (
    <div>
      <Gap h='30px' />
      <div className='product-preview'>
        <div className='content-body'>
          <div className='category-wrapper'>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
            <div className='item'>
              <span href='#'>Relief</span>
            </div>
          </div>
          <Gap h='30px' />
          <div className='box-3'>
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
            <ProductPreviewSingle />
          </div>
        </div>
      </div>
    </div>
  );
}
