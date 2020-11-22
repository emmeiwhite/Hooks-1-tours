import React, { useState, useEffect } from "react";
import { ReactComponent as Loader } from "./components/common/Loading.svg";
import Tours from "./components/tours/Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mimimcing componentDidMount()
  useEffect(() => {
    setLoading(true);
    // getTours();

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
    <main className="App">{tours.length > 0 && <Tours tours={tours} />}</main>
  );
}

export default App;
