import { useRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TagsInput({
  tags,
  removeTags,
  setTags,
  addTags,
  errorText,
}) {
  const inputRef = useRef(null);
  return (
    <div className='tags-wrapper'>
      <div
        className='tags-input'
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
              <div className='tag-icon' onClick={() => removeTags(index)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#0052cc" }}
                  size='xs'
                />
              </div>
            </li>
          ))}
          <input
            name='tags'
            type='text'
            placeholder='Press enter to add tags'
            onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
            ref={inputRef}
          />
        </ul>
      </div>
      <span className='error-text'>{errorText}</span>
    </div>
  );
}
