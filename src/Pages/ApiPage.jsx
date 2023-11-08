import React, { useEffect, useState } from "react";
import classes from "./ApiPage.module.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";

const ApiPage = () => {
  const [cardData, setCardData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = cardData.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => setCardData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={classes.cardsContainer}>
        {currentPosts ? (
          currentPosts.map((card, index) => (
            <Card title={card.id} key={index} body={card.body} />
          ))
        ) : (
          <p>Loading... </p>
        )}
        <div className={classes.pagination}>
          <Pagination
            totalPosts={cardData.length}
            setCurrentPage={setCurrentPage}
            postsPerPage={postPerPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
