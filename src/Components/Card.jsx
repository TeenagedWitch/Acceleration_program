import React from "react";
import classes from "./Card.module.css";
import logo from "../assets/product.png";

const Card = ({ title, body }) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>
        <img src={logo} alt="Card-picture" />
      </div>
      <div className={classes.cardText}>
        <h1 className={classes.cardTitle}>{title}</h1>
        <p className={classes.cardDescription}>{body} </p>
      </div>
      <a className={classes.viewFully}>View</a>
    </div>
  );
};

export default Card;
