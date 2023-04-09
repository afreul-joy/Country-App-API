import React, { useEffect, useState } from "react";
import Country from "./Country/Country";


const Countries = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    setLoading(true);
    // console.log("loading data");
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
      setError(null);
      //   console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error);
      //   console.log(error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <h1> List of data </h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((newData) => (
          <Country key={newData.id} newData={newData}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
