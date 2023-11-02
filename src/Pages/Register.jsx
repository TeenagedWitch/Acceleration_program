import React, { useState } from "react";

import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/add_a_photo.png";

const Register = () => {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");

  const handleNameInputChange = (e) => {
    setEnteredName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(enteredName);

    navigate("/form");
  };

  return (
    <form className={classes.register}>
      <h1>Get Started</h1>
      <p className={classes.registerAddPhoto}>Add a photo</p>
      <div className={classes.pfpCircle}>
        <img src={logo} alt="circledImage" />
      </div>
      <label htmlFor="name">Fill In Your Name</label>
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
