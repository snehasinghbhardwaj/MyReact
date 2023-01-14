import { reaction } from "mobx";
import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

function filterData(searchText, resturantList) {
  return resturantList.filter((resturant) =>
    resturant.data.name.includes(searchText)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState(resturantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeHolder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={(e) => {
            //need to filter data
            const data = filterData(searchText, resturants);
            //update the state resturant
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturanObj) => {
          return (
            <ResturantCard {...resturanObj.data} key {...resturanObj.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
