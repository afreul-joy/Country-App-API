import React, { useEffect, useState } from "react";
import Country from "./Country/Country";
import Search from "./Search/Search";

const Countries = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    setLoading(true);
    // console.log("loading data");
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Sort data by country name in ascending order
      data.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });

      setData(data);
      setOriginalData(data); // Save original data
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

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    if (value === "") {
      // If search input is empty, reset data to original data
      setData(originalData);
    } else {
      const newCountry = originalData.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value);
      });
      setData(newCountry);
    }
  };
  return (
    <>
      <h1> List of data </h1>
      <Search handleSearch={handleSearch}></Search>
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
