import React, { useState } from "react";
import cardDatas from "../utility/mockData";
import CardsItems from './CardsItems'
// Body
//  -container
//  -card container
//    image,star,cuisine

const Body = () => {
    const [listData, setCardData] = useState(cardDatas);
  
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
                   
                    setCardData(filterList);
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