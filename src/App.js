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

  const getTours = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status < 300) {
        const data = await fetch(response.json());
        console.log(data);
        setTours(data);
        setLoading(false);
      } else {
        throw new Error("Could not fetch the data");
      }
    } catch (error) {
      console.log("ERROR :", error);
      setError(true);
    }
  };

  // Mimimcing componentDidMount()
  useEffect(() => {
    setLoading(true);
    getTours();
  }, []);

  return (
    <main>
      <h1>Our Tours</h1>
      <Tours />
    </main>
  );
}

export default App;
