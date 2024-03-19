import React from "react";
import { CDN_URL } from "../../utils/constants";

const ItemList = ({ items, dummy }) => {
console.log(dummy);
 // console.log(items);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 flex justify-between text-left border-gray-500 border-b-2"
          >
            <div className="w-9/12">
              <div className="mb-2">
                <span className="font-bold">{item.card.info.name}</span>
                <span className="font-semibold">
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm font-mono">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute right-80">
                <button className="p-1 mx-16 bg-slate-50 text-black shadow-lg ">
                   +
                </button>
              </div>
              <img src={CDN_URL + item?.card?.info?.imageId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
