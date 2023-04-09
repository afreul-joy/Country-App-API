import React from "react";

const Country = (props) => {
  console.log(props.newData.name.official);
  console.log(props.newData.flag);
  // const [flag] = props.newData
  // console.log(data)
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <img
        src={props.newData.flags.png}
        alt="Card Image"
        className="w-full h-32 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold mb-2">
        {props.newData.name.official}
      </h2>
      <p className="text-gray-500">Card Description</p>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2 focus:outline-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default Country;
