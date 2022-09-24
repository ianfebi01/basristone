import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import ProductPreviewSingleDashboard from "../../components/home/productPreview/ProductPreviewSingleDashboard";
import Gap from "../../helpers/Gap";
import "./style.css";

export default function AllTestimoniDashboard({ posts, dispatchFunction }) {
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
          <Gap h='30px' />
          <div className='box-3'>
            {posts.map((item, i) => (
              <div key={i}>
                <ProductPreviewSingleDashboard
                  postsData={posts}
                  posts={item}
                  dispatchFunction={dispatchFunction}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
