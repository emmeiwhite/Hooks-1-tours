import React, { useState, useEffect } from "react";
import Loading from "./components/common/Loading";
import Tours from "./components/tours/Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---
  const getTours = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        const result1 = await fetch(response.json());
        const result2 = await fetch(result1.json());
        console.log(result2);
        // setTours(data);
        setLoading(false);
      } else {
        throw new Error("Could not fetch the data");
      }
    } catch (error) {
      console.log("ERROR :", error);
      setError(true);
    }
  };
  --- */

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
    return <Loading />;
  }

  if (error) {
    return <p>Error ...</p>;
  }

  return (
    <main className="App">
      <h1>Our Tours</h1>
      {tours.length > 0 && <Tours tours={tours} />}
    </main>
  );
}

export default App;
