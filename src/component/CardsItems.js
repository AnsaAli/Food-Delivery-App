import React from "react";
import {Card_Img } from '../utility/constants'

const CardsItems = (props) => {
   
    const { restauDetails } = props;
    // const {name,avgRatingString,cuisines,cloudinaryImageId,sla} =restauDetails.info;

    return (
        <div className="card-container">
            <div className="dish-image">
                <img className="food-image" src={Card_Img  +
                    restauDetails.info.cloudinaryImageId
                } />
            </div>
            <div className="details">
                <h4>{restauDetails.info.name}</h4>
                <h5>{restauDetails.info.avgRatingString} Star, {restauDetails.info.sla.deliveryTime} minutes</h5>
                <h5>{restauDetails.info.cuisines.join(', ')}</h5>
                {/* <h5>{restauDetails.info.name} minutes</h5> */}
            </div>
        </div>
    )
}

export default CardsItems;