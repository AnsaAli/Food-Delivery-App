import React, { useEffect, useState } from "react";
import cardDatas from "../utility/mockData";
import CardsItems from './CardsItems';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useDisplayRestau from "../utility/useDisplayRestau"
// Body
//  -container
//  -card container
//    image,star,cuisine

const Body = () => {
    // const [listData, setListData] = useState(cardDatas);
    // const [filterData, setfilterData] = useState(cardDatas); 
    // const [listData, setListData] = useState([]);
    // const [filterData, setfilterData] = useState([]);
    //this is used for to do saerch while we have alredy  

    const {listData,filterData} = useDisplayRestau([])
  
    //for to set input value
    const [serchText, setSearchText] = useState('')

    // useEffect(() => {
    //     fetchData();
    // }, []);


    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.033826&lng=76.312538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         const json = await response.json(); // Parse the JSON data from the response
    //         setListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         setfilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // will show loding while page render
    // if(listData.length === 0){
    //     return <p>Loding..</p>
    // }

    //to show shimmer UI
    if (listData.length === 0) {
        return <Shimmer />
    }

    return (
        <>
            <div className="body-container">
                <div className="Search">
                    <input type="text" placeholder="search here" value={serchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="input-btn" onClick={() => {
                        const filteredRestau = listData.filter((restau) => restau.info.name.toLowerCase().includes(serchText.toLowerCase()))
                        console.log(serchText)
                        setfilterData(filteredRestau);
                    }} >
                        Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn"
                        onClick=
                        {() => {
                            const filterList = filterData.filter(data => {
                                return data.info.avgRatingString > 4.5
                            });

                            setfilterData(filterList);
                        }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="card-list">

                {
                    filterData ? filterData.map((resta) => {
                        return (<Link to={"/restaurants/" + resta.info.id} key={resta.info.id} className="res-list">
                            <CardsItems restauDetails={resta} />
                        </Link>)
                    }) : 'Hello'
                    
                }

            </div>
        </>
    )
}
export default Body;