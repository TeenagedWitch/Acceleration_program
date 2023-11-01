import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={classes.landing}>
      <div className={classes.content}>
        <img src="../assets/pngegg1.png" alt="" />
        <h1>Get Started Today</h1>
        <NavLink to="/register">
          <button>Get started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
