import React, { useState, useRef } from "react";

import classes from "./ImageUPloader.module.css";
import logo from "../assets/add_a_photo.png";
const ImageLocalStorage = () => {
  const [image, setImage] = useState("");
  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        localStorage.setItem("savedImage", base64String);
        setImage(`data:image/png;base64,${base64String}`);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = () => {
    imageInputRef.current.click();
  };
  const handleImageReChange = () => {
    console.log("rechange");
  };

  return (
    <div>
      {!image && (
        <>
          <img className={classes.imgLoader} onClick={handleImageClick} />
          <input
            type="file"
            id="file-input"
            className={classes.invisibleInput}
            onChange={handleImageChange}
            ref={imageInputRef}
          ></input>
        </>
      )}

      {/* <button onClick={loadImage}>Load from Local Storage</button> */}

      {image && (
        <>
          <a onClick={handleImageReChange}>
            <img src={image} alt="Uploaded" className={classes.pfpCircle} />
          </a>
        </>
      )}
    </div>
  );
};

export default ImageLocalStorage;
