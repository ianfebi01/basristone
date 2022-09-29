import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewDashboard from "../../components/home/productPreview/productPreviewDashboard";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import ProductPreviewSingleDashboard from "../../components/home/productPreview/ProductPreviewSingleDashboard";
import Gap from "../../helpers/Gap";
import "./style.css";

export default function AllProductDashboard({ posts, dispatchFunction }) {
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
              onClick={() => navigate("/dashboard/all")}
            >
              <span>Semua</span>
            </div>
            {uniqueCategory.map((item, i) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/dashboard/all/${item}`}
                className={`item ${params === item && "select"}`}
                key={i}
              >
                <span>{item}</span>
              </Link>
            ))}
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
                      <ProductPreviewSingleDashboard
                        postsData={posts}
                        posts={item}
                        dispatchFunction={dispatchFunction}
                      />
                    </div>
                  ))
              : posts.map((item, i) => (
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
