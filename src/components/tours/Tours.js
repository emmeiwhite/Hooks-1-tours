import React from "react";
import Tour from "./../tour/Tour";
import "./Tours.css";
const Tours = ({ tours, handleClick }) => {
  return (
    <section className="tours-wrapper">
      {tours.map((tour) => {
        return <Tour {...tour} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default Tours;
