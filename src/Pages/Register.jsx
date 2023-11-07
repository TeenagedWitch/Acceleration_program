import React, { useContext, useEffect, useState } from "react";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../user-context/user-info.js";
import ImageLocalStorage from "../Components/ImageUploader.jsx";

function App() {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [enteredImg, setEnterdImg] = useState(null);
  const userCtx = useContext(UserContext);
  const userAuth = userCtx.isAuthenticated;

  // Retrieve user data from localStorage on app startup
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (storedUsername && isAuthenticated === "true") {
      userCtx.username.push(storedUsername);
      userCtx.isAuthenticated = true;
    }
  }, [userCtx]);

  console.log(enteredImg);

  const handleNameInputChange = (e) => {
    setEnteredName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!userAuth && enteredName.trim() !== "") {
      // Update the user context
      userCtx.username.push(enteredName);
      userCtx.isAuthenticated = true;

      // Store user data in localStorage
      localStorage.setItem("username", enteredName);
      localStorage.setItem("isAuthenticated", "true");

      // Redirect to the desired page
      navigate("/form");
    }
  };

  return (
    <form className={classes.register}>
      <h1>Get Started</h1>
      <p className={classes.registerAddPhoto}>Add a photo</p>
      <ImageLocalStorage />
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
        className={classes.signIn}
        disabled={enteredName.length === 0}
      >
        Sign in
      </button>
    </form>
  );
}

export default App;
