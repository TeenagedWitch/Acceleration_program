import React, { useContext, useEffect, useState } from "react";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../user-context/user-info.js";
import ImageLocalStorage from "../Components/ImageUploader.jsx";

function App() {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [enteredImg, setEnteredImg] = useState(false);
  const userCtx = useContext(UserContext);
  const userAuth = userCtx.isAuthenticated;

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (storedUsername && isAuthenticated === "true") {
      userCtx.username.push(storedUsername);
      userCtx.isAuthenticated = true;
    }
  }, [userCtx]);

  const handleNameInputChange = (e) => {
    setEnteredName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!userAuth && enteredName.trim() !== "") {
      userCtx.username.push(enteredName);
      userCtx.isAuthenticated = true;

      localStorage.setItem("username", enteredName);
      localStorage.setItem("isAuthenticated", "true");

      navigate("/form");
    }
  };

  return (
    <form className={classes.register}>
      <h1>Get Started</h1>
      <p className={classes.registerAddPhoto}>Add a photo</p>
      <ImageLocalStorage
        setEnteredImg={setEnteredImg}
        enteredImg={enteredImg}
      />
      <label htmlFor="name">Fill in your name</label>
      <input
        type="text"
        id="name"
        placeholder="Your name"
        className={classes.nameInput}
        onChange={handleNameInputChange}
      />
      <br />
      <button
        type="submit"
        onClick={handleOnSubmit}
        className={`${classes.signIn} ${
          enteredName.length == 0 || enteredImg == false ? classes.disabled : ""
        }`}
        disabled={enteredName.length == 0 || enteredImg == false}
      >
        Sign in
      </button>
    </form>
  );
}

export default App;
