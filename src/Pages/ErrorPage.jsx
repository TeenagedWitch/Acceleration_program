import React from "react";
import classes from "./ErrorPage.module.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={classes.errorPageContainer}>
      <h1>Oops! Something went wrong.</h1>
      <br />
      <p>We couldn't find the page you're looking for.</p>
      <NavLink to="/form">
        <button className={classes.goHomeButton}>Go to Home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
