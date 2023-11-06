import React, { useState } from "react";
import classes from "./Pagination.module.css";

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

  return (
    <div className={classes.paginationContainer}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
              console.log(currentPage, page);
            }}
            className={`${page == currentPage ? classes.active : ""}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
