import React, { useState } from "react";
import classes from "./Pagination.module.css";
import arrowsLeft from "../assets/chevrons-left.png";
import arrowsRight from "../assets/chevrons-right.png";
import arrowLeft from "../assets/chevron-left.png";
import arrowRight from "../assets/chevron-right-nav.png";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  let lastIndexOfPage = pages.length;
  let firstIndexOfPage = pages[0];
  const lastPageHandler = (e) => {
    e.preventDefault();
    if (currentPage !== lastIndexOfPage) setCurrentPage(lastIndexOfPage);
  };
  const nextPageHandler = (e) => {
    e.preventDefault();
    if (currentPage == pages.length) {
      setCurrentPage(firstIndexOfPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPageHandler = (e) => {
    e.preventDefault();
    if (currentPage == firstIndexOfPage) {
      setCurrentPage(lastIndexOfPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const firstPageHandler = (e) => {
    e.preventDefault();
    if (currentPage !== firstIndexOfPage) setCurrentPage(firstIndexOfPage);
  };

  return (
    <div className={classes.paginationContainer}>
      <div className={classes.arrowContainer}>
        <a href="#" onClick={firstPageHandler}>
          <img src={arrowsLeft} alt="" />
        </a>
        <a href="#" onClick={previousPageHandler}>
          <img src={arrowLeft} alt="" />
        </a>
      </div>
      {pages.map((page, index) => {
        return (
          <div key={page} className={classes.paginatorButtons}>
            <a
              key={index}
              onClick={() => {
                setCurrentPage(page);
              }}
              className={`${classes.paginationContainerButton} ${
                page == currentPage ? classes.active : ""
              }`}
            >
              {page}
            </a>
          </div>
        );
      })}
      <div className={classes.arrowContainer}>
        <a href="#" onClick={nextPageHandler}>
          <img src={arrowRight} alt="" />
        </a>
        <a href="#" onClick={lastPageHandler}>
          <img src={arrowsRight} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Pagination;
