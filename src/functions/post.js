import axios from "axios";

export const createPost = async ({ ...postData }, user, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/createPost`,
      {
        ...postData,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error.response.data.message;
  }
};
export const updatePost = async ({ ...postData }, postId, user, token) => {
  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/updatePost/${postId}`,
      {
        ...postData,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error.response.data.message;
  }
};

export const deletePost = async (postId, token) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/deletePost/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data, status: "ok" };
  } catch (error) {
    return error.response.data.message;
  }
};
