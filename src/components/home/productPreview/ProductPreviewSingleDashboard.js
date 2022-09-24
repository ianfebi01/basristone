import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../../functions/post";
import "./style.css";
import PulseLoader from "react-spinners/PulseLoader";
import Cookies from "js-cookie";

export default function ProductPreviewSingleDashboard({
  dispatchFunction,
  posts,
  postsData,
}) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    const res = await deletePost(posts._id, user.token);

    if (res.status === "ok") {
      const data = postsData.filter((item) => item._id !== res.data._id);

      dispatchFunction({
        type: "POSTS_SUCCESS",
        payload: [...data],
      });
    }
    setLoading(false);
  };
  const testRef = useRef();

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch({
      type: "GET",
      payload: posts,
    });
    Cookies.set("data", JSON.stringify(posts));
    navigate(`/dashboard/editPost/${posts._id}`);
  };

  return (
    <div className='box' ref={testRef}>
      <img src={posts.images} alt='' />
      <div className='typography'>
        {posts.header.lengt < 20 ? (
          <h2>{posts.header}</h2>
        ) : (
          <h2>{posts.header.substring(0, 18)}...</h2>
        )}

        {posts.body.length >= 200 ? (
          <p>{posts.body.substring(0, 200)}.....</p>
        ) : (
          <p>{posts.body.substring(0, 200)}</p>
        )}
      </div>
      <div className='btn-wrap-dashboard'>
        <button
          className='btn-edit'
          onClick={() => {
            handleEdit();
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
          Edit
        </button>

        <button
          className='btn-delete'
          onClick={() => {
            handleDelete();
          }}
        >
          {loading ? (
            <PulseLoader color='#fff' size={10} />
          ) : (
            <>
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </>
          )}
        </button>
      </div>
    </div>
  );
}
