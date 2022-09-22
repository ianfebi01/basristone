import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useField, ErrorMessage } from "formik";

export default function TextAreaInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='input-wrapper'>
      <textarea
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-border" : ""}
      />
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
