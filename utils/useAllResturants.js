import { useState, useEffect } from "react";
import { Test } from "../src/constants";

const useAllResturants = (data) => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setfilteredResturants] = useState([]);

  useEffect(() => {
    getAllResturants();
  }, []);

  async function getAllResturants() {
    const data = await fetch(Test);
    const json = await data.json();
    setAllResturants(json.data?.cards[2]?.data?.data?.cards);
    setfilteredResturants(json.data?.cards[2]?.data?.data?.cards);
  }
  return [allResturants, filteredResturants];
  //return { allResturants, filteredResturants };
};

export default useAllResturants;
