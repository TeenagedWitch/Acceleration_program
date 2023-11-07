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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const loadImage = () => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImage(`data:image/png;base64,${savedImage}`);
    }
  };

  useEffect(() => {
    loadImage();
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
            <h1 className={classes.modalButton}>{userName}</h1>
          </li>
          <li>
            <img
              src={image}
              alt="Uploaded"
              className={classes.userPicture}
              onClick={openModal}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
