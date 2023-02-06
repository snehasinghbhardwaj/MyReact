import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTURANT_MENU_URL } from "../constants";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { id } = useParams();

  //First useEffect to get the data then useEffect to render the component
  const [resturant, setResturant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(RESTURANT_MENU_URL + id);
    const json = await data.json();
    //console.log(json);
    console.log(RESTURANT_MENU_URL + id);
    setResturant(json.data);
  }

  return !resturant ? (
    <Shimmer />
  ) : (
    <div className="menu">
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
