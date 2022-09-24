import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useField, ErrorMessage, useFormikContext } from "formik";
import {
  faCircleExclamation,
  faFileCirclePlus,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function ImageInput({
  placeholder,
  post,
  setPost,
  handleImages,
  ...props
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const { value, ...rest } = field;
  const imageInputRef = useRef(null);
  return (
    <div className='input-wrapper'>
      {post.images ? (
        <div className='img-wrapper'>
          <img src={post.images} alt='' className='input-image-preview' />
          <div
            type='button'
            className='circle'
            onClick={() => setPost({ ...post, images: "" })}
          >
            <FontAwesomeIcon icon={faXmark} className='close' />
          </div>
        </div>
      ) : (
        <div style={{ marginBottom: "5px" }}>
          <input
            hidden
            type={field.type}
            name={field.name}
            accept='image/jpeg,image/png,image/webp,image/gif'
            ref={imageInputRef}
            placeholder={placeholder}
            {...field}
            {...props}
          />
          <button
            className='add-image'
            type='button'
            onClick={() => {
              imageInputRef.current.click();
            }}
          >
            <FontAwesomeIcon className='is-primary' icon={faFileCirclePlus} />
            <p>Add image</p>
          </button>
        </div>
      )}
      {meta.touched && meta.error && (
        <div className='error-wrap'>
          <FontAwesomeIcon className='error-icon' icon={faCircleExclamation} />
          <span className='error-text'>
            <ErrorMessage name={field.name} />
          </span>
        </div>
      )}
    </div>
  );
}
