import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  // Destructuring
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="px-2 mx-2 mt-4">
      <h1 className="text-xl font-extrabold tracking-widest">{name}</h1>
      <h2 className="text-xl font-bold tracking-widest">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <h3 className="text-xl font-bold tracking-widest">Menu</h3>
      <ul>
        {/* Added Optional Chaning to avoid this error if item list is not there */}
        {itemCards?.map((item) => (
          <li
            className="text-lg font-mono p-10 m-5 bg-neutral-300 rounded-lg cursor-pointer hover:bg-amber-50"
            key={item.card.info.id}
          >
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
