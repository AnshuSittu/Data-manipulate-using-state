import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {
  // console.log(data);

  /*  added to make controlled component  */
  //For Hide and show Item we have use this hooks and pass props ShowItem

  // const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    // setShowItem(!showItem);    /* here we have made toggale feture */
    setShowIndex();
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

        {/* Accordian Body */}
        {showItem && <ItemList items={data.itemCards} dummy={dummy}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
