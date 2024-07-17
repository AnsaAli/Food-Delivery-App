import React, { useEffect, useState } from "react";
import cardDatas from "../utility/mockData";
import CardsItems from './CardsItems'
// Body
//  -container
//  -card container
//    image,star,cuisine

const Body = () => {
    // const [listData, setListData] = useState(cardDatas);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.033826&lng=76.312538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ); //fetch is from browser, js engine

        const json = await data.json();

      setListData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    if(listData.length === 0){
        return <p>Loding..</p>
    }

    return (
        <div className="body-container">
            <div className="Search">
                Search
            </div>
            <div className="filter">
                <button className="filter-btn"
                    onClick=
                    {() => {
                        const filterList = listData.filter(data => {
                            return data.info.avgRatingString > 4.4
                        });

                        setListData(filterList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="card-list">

                {
                    listData.map((resta) => {
                        return <CardsItems key={resta.info.id} restauDetails={resta} />
                    })
                }

            </div>
        </div>
    )
}
export default Body;