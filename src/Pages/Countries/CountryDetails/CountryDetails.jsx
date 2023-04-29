import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { ccn3 } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  // Filter the data to find the country with a matching ccn3 parameter
  const country = data && data.find(country => country.ccn3 === ccn3);

  return (
    <div>
      {country ? (
        <>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          {/* Render the rest of the country details */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CountryDetails;
