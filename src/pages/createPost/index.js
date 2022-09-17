import {
  faCircleExclamation,
  faFileCirclePlus,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/home/footer";
import Gap from "../../helpers/Gap";
import "./style.css";
import dataURItoBlob from "../../helpers/dataURItoBlob";
import { useDispatch, useSelector } from "react-redux";
import { uploadImages } from "../../functions/uploadImages";
import axios from "axios";
import { createPost } from "./submitPost";
import PulseLoader from "react-spinners/PulseLoader";

export default function CreatePost({ dispatchFunction, posts }) {
  const postInfos = {
    type: "product",
    category: "",
    header: "",
    images: "",
    body: "",
  };
  const [post, setPost] = useState(postInfos);
  const { type, category, header, images, body } = post;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const { user } = useSelector((state) => ({ ...state }));
  const imageInputRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImages = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        setError(
          `${img.name} format is unsupported ! only Jpeg, Png, Webp, Gif are allowed.`
        );
        files = files.filter((item) => item.name !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 5) {
        setError(`${img.name} size is too large max 5mb allowed.`);
        files = files.filter((item) => item.name !== img.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (readerEvent) => {
          setPost({ ...post, images: readerEvent.target.result });
        };
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const postImages = dataURItoBlob(post.images);
    const path = `${user.username}/post Images`;
    let formData = new FormData();
    formData.append("path", path);
    formData.append("file", postImages);
    const response = await uploadImages(formData, path, user.token);
    const userId = user.id;
    const postData = { ...post, images: response[0].url };

    const res = await createPost({ ...postData }, user.id, user.token);
    if (res.status === "ok") {
      dispatchFunction({
        type: "POSTS_SUCCESS",
        payload: [res.data, ...posts],
      });
      setLoading(false);
      setPost(postInfos);
      setError("");
    } else {
      setLoading(false);
      setError(res);
    }
  };

  return (
    <div className='main'>
      <Header />
      <div className='content-create-post'>
        <div className='content-body'>
          <div className='create-post-wrapper'>
            <div className='header'>
              <h1>Post New Content</h1>
            </div>
            <Gap h='80px' />
            <div className='body-wrapper'>
              <div className='title'>
                <h3>Type</h3>
              </div>
              <div className='input'>
                <label htmlFor='product' className='container'>
                  <span>Product</span>
                  <input
                    type='radio'
                    name='type'
                    id='product'
                    onChange={() => setPost({ ...post, type: "product" })}
                  />
                  <span className='checkmark'></span>
                </label>
                <Gap w='30px' />
                <label htmlFor='testimoni' className='container'>
                  <span>Testimoni</span>
                  <input
                    type='radio'
                    name='type'
                    id='testimoni'
                    onChange={() => setPost({ ...post, type: "testimoni" })}
                  />
                  <span className='checkmark'></span>
                </label>
              </div>
            </div>
            <Gap h='30px' />
            <div className='body-wrapper'>
              <div className='title'>
                <h3>Category</h3>
              </div>
              <div className='input'>
                <input
                  type='text'
                  name='category'
                  placeholder='Category'
                  value={post.category}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Gap h='30px' />
            <div className='body-wrapper'>
              <div className='title'>
                <h3>Title</h3>
              </div>
              <div className='input'>
                <input
                  type='text'
                  name='header'
                  placeholder='Title'
                  value={post.header}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Gap h='30px' />
            <div className='body-wrapper'>
              <div className='title'>
                <h3>Images</h3>
              </div>
              <div className='input'>
                {post.images ? (
                  <div className='img-wrapper'>
                    <img
                      src={post.images}
                      alt=''
                      className='input-image-preview'
                    />
                    <div
                      className='circle'
                      onClick={() => setPost({ ...post, images: "" })}
                    >
                      <FontAwesomeIcon icon={faXmark} className='close' />
                    </div>
                  </div>
                ) : (
                  <>
                    <input
                      hidden
                      type='file'
                      accept='image/jpeg,image/png,image/webp,image/gif'
                      ref={imageInputRef}
                      onChange={handleImages}
                    />
                    <button
                      className='add-image'
                      onClick={() => {
                        imageInputRef.current.click();
                      }}
                    >
                      <FontAwesomeIcon
                        className='is-primary'
                        icon={faFileCirclePlus}
                      />
                      <p>Add image</p>
                    </button>
                  </>
                )}
              </div>
            </div>
            <Gap h='30px' />
            <div className='body-wrapper'>
              <div className='title'>
                <h3>Description</h3>
              </div>
              <div className='input'>
                <textarea
                  type='text'
                  name='body'
                  placeholder='Title'
                  value={post.body}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Gap h='50px' />
            <div className='body-wrapper'>
              <button type='submit' className='btn-2' onClick={handleSubmit}>
                {loading ? <PulseLoader color='#fff' size={10} /> : "Submit"}
              </button>
            </div>
            {error && (
              <>
                <Gap h='50px' />
                <div className='body-wrapper'>
                  <div className='error-wrap'>
                    <FontAwesomeIcon
                      className='error-icon'
                      icon={faCircleExclamation}
                    />
                    <span className='error-text'>{error}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='content-4'>
        <div className='content-body'>
          <Footer />
        </div>
      </div>
    </div>
  );
}