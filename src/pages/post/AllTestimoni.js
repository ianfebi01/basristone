import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import Gap from "../../helpers/Gap";
import "./style.css";

export default function AllTestimoni({ posts }) {
  const allCategory = posts.map((item) => item.category.toLowerCase());
  const uniqueCategory = allCategory.filter(
    (val, id, array) => array.indexOf(val) == id
  );
  const navigate = useNavigate();
  const params = useParams().category;

  return (
    <div>
      <div className='product-preview'>
        <div className='content-body'>
          <div className='category-wrapper'>
            <div
              className={`item ${params ? "" : "select"}`}
              onClick={() => navigate("/product")}
            >
              <span>Semua Kategori</span>
            </div>
            {uniqueCategory.map((item, i) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/product/${item}`}
                className={`item ${params === item && "select"}`}
                key={i}
              >
                <span>{item}</span>
              </Link>
            ))}
            {/* {uniqueCategory.map((item, i) => (
              <div className='item' key={i}>
                <span>{item}</span>
              </div>
            ))} */}
          </div>
          <Gap h='30px' />
          <div className='box-3'>
            {params
              ? posts
                  .filter((item) =>
                    item.category.toLowerCase().includes(params)
                  )
                  .map((item, i) => (
                    <div key={i}>
                      <ProductPreviewSingle posts={item} />
                    </div>
                  ))
              : posts.map((item, i) => (
                  <div key={i}>
                    <ProductPreviewSingle posts={item} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
