import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import Gap from "../../helpers/Gap";
import "./style.css";
import Testimoni from "../../components/home/testimoni";
import ProductPreviewDashboard from "../../components/home/productPreview/productPreviewDashboard";
import { useSelector } from "react-redux";

export default function Dashboard({ dispatchFunction, posts }) {
  const allCategory = posts.map((item) => item.category.toLowerCase());
  const uniqueCategory = allCategory.filter(
    (val, id, array) => array.indexOf(val) == id
  );
  const navigate = useNavigate();
  const params = useParams().category;

  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className='main'>
      <Header />
      <div className='content-dashboard'>
        <div className='content-body'>
          <div className='dashboard-wrapper'>
            <div className='header'>
              <h1>Dashboard</h1>
            </div>
            <Gap h='50px' />
            <div className='body-wrapper'>
              <Link to='/'>
                <button className='btn-add-post'>
                  <FontAwesomeIcon icon={faPlus} />
                  Add New Post
                </button>
              </Link>
              <div className='product-wrapper'>
                <h2 className='text-top'>Manage All Product</h2>
                <ProductPreviewDashboard
                  postsData={posts}
                  posts={posts?.filter((item) =>
                    item.type.toLowerCase().includes("product")
                  )}
                  dispatchFunction={dispatchFunction}
                />
                <Link to='/product'>
                  <div className='selengkapnya'>
                    <span className='textDark'>Selengkapnya</span>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow' />
                  </div>
                </Link>
              </div>
              <div className='product-wrapper'>
                <h2 className='text-top'>Manage All Testimoni</h2>
                <ProductPreviewDashboard
                  postsData={posts}
                  posts={posts?.filter((item) =>
                    item.type.toLowerCase().includes("testimoni")
                  )}
                />
                <Link to='/product'>
                  <div className='selengkapnya'>
                    <span className='textDark'>Selengkapnya</span>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
