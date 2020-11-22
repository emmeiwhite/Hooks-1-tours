import React, { useState, useEffect } from "react";
import { ReactComponent as Loader } from "./components/common/Loading.svg";
import Tours from "./components/tours/Tours";
import "./App.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /*--- I am using fetch API here
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw new Error("Could not fetch data");
        }
      })
      .then((tours) => {
        setLoading(false);
        setTours(tours);
      })
      .catch((err) => console.log(err));
  }, []);
  ---*/

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  useState(() => {
    setLoading(true);
    fetchTours();
  }, []);
  // Functionality 1: Not Interested Button click
  const handleBtnClick = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  // Functionality 2: Refresh Button click

  const handleRefresh = () => {
    setLoading(true);
    fetchTours();
  };

  // Let us do conditional rendering
  if (loading) {
    return (
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error ...</p>;
  }

  return (
    <section>
      <p className="our-tours">
        {tours.length > 0 ? (
          "Our Tours"
        ) : (
          <div>
            <p>No Tours Left</p>
            <button className="btn" onClick={handleRefresh}>
              Refresh
            </button>
          </div>
        )}{" "}
      </p>
      <main className="App">
        {tours.length > 0 && (
          <Tours tours={tours} handleClick={handleBtnClick} />
        )}
      </main>
    </section>
  );
}

export default App;
