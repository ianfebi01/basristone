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

export default function DashboardPage({ posts, dispatchFunction }) {
  return (
    <div className='content-dashboard'>
      <div className='content-body'>
        <div className='dashboard-wrapper'>
          <div className='header'>
            <h1>Dashboard</h1>
          </div>
          <Gap h='30px' />
          <div className='body-wrapper'>
            <Link to='/dashboard/createPost'>
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
              <Link to='/dashboard/all'>
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
                dispatchFunction={dispatchFunction}
                posts={posts?.filter((item) =>
                  item.type.toLowerCase().includes("testimoni")
                )}
              />
              <Link to='/dashboard/testimoni'>
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
  );
}
