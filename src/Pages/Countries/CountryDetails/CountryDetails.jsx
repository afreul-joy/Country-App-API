import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {ccn3} = useParams()
    return (
        <div>
           <h1> {ccn3}</h1>
        </div>
    );
};

export default CountryDetails;