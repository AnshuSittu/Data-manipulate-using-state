import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";

const Body = () => {
  //Local state Variable

  const [ListOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  //console.log(ListOfRestaurant);

  //Bind search box using State
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type"
    );

    const json = await data.json();

    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // Optional chaining ?

    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Online Status Hook Integrated here

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Please Check Your Internet ❌ Its Not Working ❗ </h1>;

  const { loggedInUser, setUserName } = useContext(userContext);

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body container-md mx-auto max-sm">
      <div className="flex justify-between">
        <div className="search m-2 p-2">
          <input
            type=" text"
            className="p-2 border border-solid border-black rounded-md hover:border-green-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 text-white shadow-lg rounded-lg bg-green-500 m-4 "
            onClick={() => {
              // filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = ListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <label>User Name:</label>{" "}
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
            className="p-2 border border-solid border-black rounded-md hover:border-green-500"
          ></input>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className=" px-4 py-2 text-white shadow-lg rounded-lg bg-green-500"
            onClick={() => {
              // filter logic here

              const filteredList = ListOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
