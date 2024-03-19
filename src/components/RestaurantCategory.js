import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data);

  //For Hide and show Item we have use thik hooks
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);    /* here we have made toggale feture */
  };
  
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12  my-4 m-auto bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>+</span>
        </div>

        {showItem && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
