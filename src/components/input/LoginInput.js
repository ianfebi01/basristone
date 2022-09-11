import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function LoginInput({ placeholder, error, ...props }) {
  return (
    <div className='input-wrapper'>
      <input
        {...props}
        placeholder={placeholder}
        className={error && "error-border"}
      />
      {error && (
        <div className='error-wrap'>
          <FontAwesomeIcon className='error-icon' icon={faCircleExclamation} />
          <span className='error-text'>{error}</span>
        </div>
      )}
    </div>
  );
}
