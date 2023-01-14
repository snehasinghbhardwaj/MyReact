import { IMG_CDN_URL } from "../constants";
const ResturantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // const { name, cusines, avgRating, cloudinaryImageId } = resturant.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(",")}</h4>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default ResturantCard;
