import React from "react";
import Tour from "./../tour/Tour";
import "./Tours.css";
const Tours = ({ tours }) => {
  return (
    <section className="tours-wrapper">
      <p className="our-tours">Our Tours</p>
      {tours.map((tour) => {
        return <Tour {...tour} />;
      })}
    </section>
  );
};

export default Tours;
