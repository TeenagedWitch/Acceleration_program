import React from "react";

import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
