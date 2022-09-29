import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductPreview from "../../components/home/productPreview";
import ProductPreviewSingle from "../../components/home/productPreview/ProductPreviewSingle";
import Gap from "../../helpers/Gap";
import "./style.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TagsInput from "../../components/input/TagsInput";

export default function AllProduct({ posts }) {
  const allCategory = posts.map((item) => item.category.toLowerCase());
  const uniqueCategory = allCategory.filter(
    (val, id, array) => array.indexOf(val) == id
  );
  const navigate = useNavigate();
  const params = useParams().category;

  const [tags, setTags] = useState([]);
  const [errorText, setErrorText] = useState("");
  // const [filtered, setFiltered] = useState([]);
  // const [filteredMap, setFilteredMap] = useState([]);

  // // Notice that index 2 is skipped, since there is no item at
  // // that position in the array.

  // console.log("filtered:", filtered);

  // useEffect(() => {
  //   for (var i in tags) {
  //     setFiltered([
  //       ...filtered,
  //       posts.filter((item) => item.category.toLowerCase().includes(tags[i])),
  //     ]);
  //   }
  //   console.log("filteredMap", filtered[0]);
  // }, [tags]);

  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((item, i) => i !== indexToRemove));
  };

  return (
    <div>
      <div className='product-preview'>
        <div className='content-body'>
          <div className='category-wrapper'>
            <div
              className={`item ${params ? "" : "select"}`}
              onClick={() => navigate("/product")}
            >
              <span>Semua</span>
            </div>
            {uniqueCategory.map((item, i) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/product/${item}`}
                className={`item ${params === item && "select"}`}
                key={i}
              >
                <span>{item}</span>
              </Link>
            ))}
          </div>

          <Gap h='30px' />
          {/* Tags */}
          {/* <TagsInput
            tags={tags}
            setTags={setTags}
            removeTags={removeTags}
            addTags={addTags}
            errorText={errorText}
          /> */}
          {/* Tags */}

          <Gap h='30px' />
          <div className='box-3'>
            {params
              ? posts
                  .filter((item) =>
                    item.category.toLowerCase().includes(params)
                  )
                  .map((item, i) => (
                    <div key={i}>
                      <ProductPreviewSingle posts={item} />
                    </div>
                  ))
              : posts.map((item, i) => (
                  <div key={i}>
                    <ProductPreviewSingle posts={item} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
