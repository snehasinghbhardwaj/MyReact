import { IMG_CDN_URL } from "../constants";
const ResturantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // const { name, cusines, avgRating, cloudinaryImageId } = resturant.data;
  return (
    <div className="w-[200px] h-[250px] p-2 m-2 shadow-lg bg-neutral-200 border-red">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-l">{name}</h3>
      <h4 className="text-xs">{cuisines?.join(",")}</h4>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default ResturantCard;
