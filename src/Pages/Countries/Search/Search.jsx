import React, { useState,useEffect } from 'react';

const Search = (props) => {
    // console.log(props) 
   const [searchText, setSearchText]= useState("");
   
   const handleChange = (e) => {
    setSearchText(e.target.value);
    // alert(searchText)
   };

   useEffect(() => {
    // alert(searchText);
    props.handleSearch(searchText);

   }, [searchText])
   

  return (
    <div className="flex items-center justify-center mt-8">
    <input
      type="text"
      className="py-2 px-4 w-64 bg-gray-200 rounded-full focus:outline-none"
      placeholder="Search..."
      value={searchText}
      onChange={handleChange}
    />
    <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
      Search
    </button>
  </div>
  );
};

export default Search;
