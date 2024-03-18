import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  //console.log(resData)


  const {
   cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="m-3 w-200px h-55 font-serif bg-[#FBFFFF] border-2 border-gray-50 group block rounded-lg ease-in-out delay-150 bg-white-900 hover:-translate-y-1 hover:scale-110 hover:bg-slate-50 duration-300 ... ">
      <img
        className="w-72 p-1 m-1 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="w-72 m-2 h-52 font-mono">
      <h3 className="font-bold text-zinc-900 text-lg py-1">{name}</h3>
      <h4 className="tracking-wide font-medium py-1 ">{cuisines?.join(", ")}</h4>
      <h4 className="py-1">{avgRating} ⭐</h4>
      <h4 className="py-1"> {costForTwo} For Two</h4>
      <h4 className="py-1">{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
