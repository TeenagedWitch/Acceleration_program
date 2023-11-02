import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";
import logo from "../assets/pngegg1.png";

const HomePage = () => {
  return (
    <div className={classes.landing}>
      <div className={classes.content}>
        <img className={classes.logo} src={logo} alt="" />
        <h1 className={classes.contentTitle}>Get Started Today</h1>
        <NavLink to="/register">
          <button className={classes.contentButton}>Get started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
