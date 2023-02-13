import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useResturant from "../../utils/useResturant";

const ResturantMenu = () => {
  const { id } = useParams();
  //Created Custom Hook
  /**
   * Segregatting code on the basis of api data fetch & display api data using Custom Hooks
   * api data fetch will be done in below custom hook by passing resId
   * maintaining resturant state is taken care by useResturant hook
   */
  const resturant = useResturant(id);

  return !resturant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>{resturant.name}</h1>
        <img src={IMG_CDN_URL + resturant.cloudinaryImageId} />
        <h3>{resturant?.city}</h3>
        <h3>{resturant?.area}</h3>
        <h3>{resturant?.avgRating}</h3>
        <h3>{resturant?.costForTwo}</h3>
        {/* {<div>{console.log(Object.values(resturant?.menu?.items))}</div>} */}
      </div>

      <div>
        <h2>Menu</h2>
        <ul>
          {Object.values(resturant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
