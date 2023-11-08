import React, { useState, useRef } from "react";

import classes from "./ImageUploader.module.css";
const ImageLocalStorage = ({ enteredImg, setEnteredImg }) => {
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
    setEnteredImg(true);
  };
  const handleImageClick = () => {
    imageInputRef.current.click();
  };
  const handleImageReChange = () => {
    imageInputRef.current.click();
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
          />
        </>
      )}

      {image && (
        <>
          <img
            src={image}
            alt="Uploaded"
            onClick={handleImageReChange}
            className={classes.pfpCircle}
          />
          <input
            type="file"
            id="file-input"
            className={classes.invisibleInput}
            onChange={handleImageChange}
            ref={imageInputRef}
          />
        </>
      )}
    </div>
  );
};

export default ImageLocalStorage;
