import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, name, info, image, price, handleClick }) => {
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  return (
    <article key={id} className="destination-card">
      <div className="destination-image-wrapper">
        <img src={image} alt="Tourist Destination Image" />
      </div>

      <div className="destination-and-price">
        <p className="destination-name">{name}</p>
        <p className="destination-price">$ {price}</p>
      </div>

      <div className="destination-info-wrapper">
        <span className="destination-info">
          {showMoreClicked ? info : info.substring(0, 170)}
        </span>

        <span
          className="show-more"
          onClick={() => setShowMoreClicked(!showMoreClicked)}
        >
          {showMoreClicked ? "...Read Less" : "...Read More"}
        </span>
      </div>

      <button className="not-interested-btn" onClick={() => handleClick(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
