import React, { useContext } from "react";
import classes from "./Modal.module.css";
import { UserContext } from "../user-context/user-info";
import { useNavigate } from "react-router-dom";
import logo from "../assets/close.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const signOutHandler = (e) => {
    e.preventDefault();

    userCtx.isAuthenticated = false;
    userCtx.username = [];
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={classes.modalContainer} onClick={onClose}>
      <div className={classes.modalContent}>
        <h3>Sign Out</h3>
        <p>Are you sure you want to sign out?</p>
        <button onClick={signOutHandler}>Sign Out</button>
        <button className={classes.closeModal} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
