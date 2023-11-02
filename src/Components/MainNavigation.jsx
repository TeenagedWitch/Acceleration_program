import React from "react";

import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className={classes.navbar}>
        <NavLink to="/form">Logo</NavLink>
        <ul>
          <li>
            <NavLink>API</NavLink>
          </li>
          <li>
            <NavLink>User's name</NavLink>
          </li>
          {/* <li>
            <img src="" alt="" className={classes.userPicture} />
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
