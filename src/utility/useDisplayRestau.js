import { useEffect, useState } from "react";
import { Restau_Cards } from "./constants";

const useDisplayRestau =()=>{

    const [listData, setListData] = useState([]);
    const [filterData, setfilterData] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const response = await fetch(Restau_Cards);
       const json = await response.json(); 
       setListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return {listData,filterData,setfilterData}

}

export default useDisplayRestau;