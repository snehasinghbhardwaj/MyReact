import { useState, useEffect } from "react";
import { RESTURANT_MENU_URL } from "../src/constants";

const useResturant = (resId) => {
  const [resturant, setResturant] = useState(null);

  //we need to get data just once so writing under useEffect
  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(RESTURANT_MENU_URL + resId);
    const json = await data.json();
    setResturant(json.data);
  }

  return resturant;
};

export default useResturant;
