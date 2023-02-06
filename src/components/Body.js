import { reaction } from "mobx";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { Test } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, resturantList) {
  return resturantList.filter((resturant) =>
    resturant.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setfilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  /**
   * 1.Empty dependency array  [] means means Function inside useEffect will be called just once after render.
   *  2.Dep array [searchText] => Once after initial render + everytime after re-render (means searchText changes)
   */

  useEffect(() => {
    //API call to load resturantList
    getResturantS();
  }, []);

  async function getResturantS() {
    const data = await fetch(Test);
    const json = await data.json();
    //console.log(json.data);
    setfilteredResturants(json.data?.cards[2]?.data?.data?.cards);
    setAllResturants(json.data?.cards[2]?.data?.data?.cards);
    //console.log(json.data?.cards[2]?.data?.data?.cards);
  }

  //no render component (Early return)
  if (!allResturants) return null;

  // if (filteredResturants?.length === 0)
  //   return <h1>"No resturant matched your filter!!!"</h1>;

  return allResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeHolder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={(e) => {
            //need to filter data
            const data = filterData(searchText, allResturants);
            //update the state resturant
            setfilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredResturants.map((resturanObj) => {
          return (
            <Link
              to={"/resturant/" + resturanObj.data.id}
              key={resturanObj.data.id}
            >
              <ResturantCard {...resturanObj.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
