import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Gap from "../../helpers/Gap";
import "./style.css";
import dataURItoBlob from "../../helpers/dataURItoBlob";
import { useSelector } from "react-redux";
import { uploadImages } from "../../functions/uploadImages";
import PulseLoader from "react-spinners/PulseLoader";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import PostInput from "../../components/input/PostInput";
import TextAreaInput from "../../components/input/TextAreaInput";
import ImageInput from "../../components/input/ImageInput";
import { updatePost } from "../../functions/post";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditPost({ dispatchFunction, posts }) {
  const { user } = useSelector((state) => ({ ...state }));
  const { data } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();

  const postId = useParams().id;
  const postInfos = {
    type: data?.type,
    category: data?.category,
    header: data?.header,
    images: data?.images,
    body: data?.body,
  };
  const [post, setPost] = useState(postInfos.type ? postInfos : "");

  const { type, category, header, images, body } = post;
  console.log("data: ", type);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const imageeee = post.images.match(/(http|https)\:.+/);

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
  // Formik
  const postValidation = Yup.object({
    category: Yup.string()
      .required("Category required")
      .matches(/^\S*$/, "Category cant accept space characters")
      .min(3, "Category min 3 characters")
      .max(9, "Category max 9 characters"),
    header: Yup.string()
      .required("Title required")
      .min(6, "Title min 16 characters")
      .max(40, "Title max 40 characters"),
    images: Yup.mixed().required("File is required"),
    body: Yup.string()
      .required("Description required")
      .min(6, "Description min 16 characters")
      .max(3000, "Description max 3000 characters"),
  });
  // Formik

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (imageeee) {
        const res = await updatePost({ ...post }, postId, user.id, user.token);
        if (res.status === "ok") {
          const posts2 = posts?.filter((item) => item._id !== res.data._id);
          const post2 = { _id: postId, ...post };
          dispatchFunction({
            type: "POSTS_SUCCESS",
            payload: [post2, ...posts2],
          });
          toast.success("Data Submited!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
          setPost(postInfos);
          setError("");
          navigate("/dashboard");
        } else {
          setLoading(false);
          setError(res);
        }
      } else {
        const postImages = dataURItoBlob(post.images);
        const path = `${user.username}/post Images`;
        let formData = new FormData();
        formData.append("path", path);
        formData.append("file", postImages);
        const response = await uploadImages(formData, path, user.token);
        const userId = user.id;
        const postData = { ...post, images: response[0].url };

        const res = await updatePost(
          { ...postData },
          postId,
          user.id,
          user.token
        );
        if (res.status === "ok") {
          const posts2 = posts?.filter((item) => item._id !== res.data._id);
          const postData2 = { _id: postId, ...postData };
          dispatchFunction({
            type: "POSTS_SUCCESS",
            payload: [postData2, ...posts2],
          });
          setLoading(false);
          setPost(postInfos);
          setError("");
          toast.success("Data Edited!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate("/dashboard");
        } else {
          setLoading(false);
          setError(res);
        }
      }
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div className='content-create-post'>
      <div className='content-body'>
        <div className='create-post-wrapper'>
          <div className='header'>
            <h1>Edit Post</h1>
          </div>
          <Gap h='80px' />
          <Formik
            enableReinitialize
            initialValues={{
              ...post,
            }}
            validationSchema={postValidation}
            onSubmit={() => {
              handleSubmit();
            }}
          >
            {(formik) => (
              <Form>
                <div className='body-wrapper'>
                  <div className='title'>
                    <h3>Type</h3>
                  </div>
                  <div className='input'>
                    <label htmlFor='product' className='container'>
                      <span>Product</span>
                      {type === "product" ? (
                        <input
                          type='radio'
                          name='type'
                          id='product'
                          value=''
                          checked='checked'
                          onChange={() => setPost({ ...post, type: "product" })}
                        />
                      ) : (
                        <input
                          type='radio'
                          name='type'
                          id='product'
                          value=''
                          onChange={() => setPost({ ...post, type: "product" })}
                        />
                      )}
                      <span className='checkmark'></span>
                    </label>
                    <Gap w='30px' />
                    <label htmlFor='testimoni' className='container'>
                      <span>Testimoni</span>
                      {type === "testimoni" ? (
                        <input
                          type='radio'
                          name='type'
                          id='testimoni'
                          checked='checked'
                          value=''
                          onChange={() =>
                            setPost({ ...post, type: "testimoni" })
                          }
                        />
                      ) : (
                        <input
                          type='radio'
                          name='type'
                          id='testimoni'
                          value=''
                          onChange={() =>
                            setPost({ ...post, type: "testimoni" })
                          }
                        />
                      )}
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
                    <PostInput
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
                    <PostInput
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
                    <ImageInput
                      name='images'
                      type='file'
                      value={undefined}
                      onChange={handleImages}
                      post={post}
                      setPost={setPost}
                    />
                    {/* {post.images ? (
                        <div className='img-wrapper'>
                          <img
                            src={post.images}
                            alt=''
                            className='input-image-preview'
                          />
                          <div
                            className='circle'
                            type='button'
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
                            type='button'
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
                      )} */}
                  </div>
                </div>
                <Gap h='30px' />
                <div className='body-wrapper'>
                  <div className='title'>
                    <h3>Description</h3>
                  </div>
                  <div className='input'>
                    <TextAreaInput
                      type='text'
                      name='body'
                      placeholder='Description'
                      value={post.body}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Gap h='50px' />
                <div className='body-wrapper'>
                  <button type='submit' className='btn-2'>
                    {loading ? (
                      <PulseLoader color='#fff' size={10} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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
  );
}
