import React, { useEffect, useState, useRef } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../user-context/user-info.js";
import Modal from "./Modal";

const MainNavigation = () => {
  const userCtx = useContext(UserContext);
  const userName = userCtx.username[0];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const loadImage = () => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImage(`data:image/png;base64,${savedImage}`);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        localStorage.setItem("savedImage", base64String);
        setImage(`data:image/png;base64,${base64String}`);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    loadImage();
    console.log("Image has been set");
  }, []);

  return (
    <header>
      <nav className={classes.navbar}>
        <div className={classes.navLinks}>
          <NavLink to="/form">Logo</NavLink>
          <NavLink to="/api">API</NavLink>
        </div>
        <ul className={classes.navProfile}>
          <li>
            <button onClick={openModal} className={classes.modalButton}>
              {userName}
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </li>
          <li>
            <img
              src={image}
              alt="Uploaded"
              className={classes.userPicture}
              onClick={handleImageClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
