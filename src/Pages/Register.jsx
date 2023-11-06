import React, { useContext, useState } from "react";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../user-context/user-info.js";
import ImageLocalStorage from "../Components/ImageUploader.jsx";

const Register = () => {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [enteredImg, setEnterdImg] = useState(null);
  const userCtx = useContext(UserContext);
  const userAuth = userCtx.isAuthenticated;

  console.log(enteredImg);

  const handleNameInputChange = (e) => {
    setEnteredName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!userAuth && enteredName.trim() !== "") {
      userCtx.username.push(enteredName);
      userCtx.isAuthenticated = true;
    }
    console.log(userCtx.isAuthenticated);
    console.log(userCtx.username);
    navigate("/form");
  };

  return (
    <form className={classes.register}>
      <h1>Get Started</h1>
      <p className={classes.registerAddPhoto}>Add a photo</p>
      <ImageLocalStorage />
      <label htmlFor="name">fill in your name</label>
      <input
        type="text"
        id="name"
        placeholder="your name"
        className={classes.nameInput}
        onChange={handleNameInputChange}
      />
      <br />
      <button
        type="submit"
        onClick={handleOnSubmit}
        className={classes.signIn}
        disabled={enteredName.length === 0}
      >
        Sign in
      </button>
    </form>
  );
};

export default Register;
