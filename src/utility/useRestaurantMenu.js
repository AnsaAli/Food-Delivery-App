import { useEffect, useState } from "react";
import { Menu_Api } from "../utility/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  
  //fetching res data
  const fetchMenu = async ()=>{
    const data = await fetch(Menu_Api + resId) ;
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
};
export default useRestaurantMenu;
