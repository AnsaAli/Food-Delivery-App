import React from "react";
import { Card_Img } from "../utility/constants";

const CardsItems = (props) => {
  const { restauDetails } = props;
  // const {name,avgRatingString,cuisines,cloudinaryImageId,sla} =restauDetails.info;

  return (
    <div className="card-container m-4 p-4 px-8 w-80 shadow-xl h-[500px] ">
      <div className="dish-image mb-5 ">
        <img
          className="food-image rounded-lg h-72"
          src={Card_Img + restauDetails.info.cloudinaryImageId}
        />
      </div>
      <div className="details">
        <h4 className="font-bold text-xl">{restauDetails.info.name}</h4>
        <h5 className="mt-2">
          {restauDetails.info.avgRatingString} Star,{" "}
          {restauDetails.info.sla.deliveryTime} minutes
        </h5>
        <h5 className="mt-2">{restauDetails.info.cuisines.join(", ")}</h5>
        {/* <h5>{restauDetails.info.name} minutes</h5> */}
      </div>
    </div>
  );
};

//higher order component , if we need to show some restaurants have offer/promotion (in db it will be like, promotion : true) we can show using this.
//higher order component will take a component as input and return another component, and this component will return some jsx
export const showPromottedLabel = (CardsItems) => {

    //component
  return (props) => {
    return(
        <div>
            <lable>Promotted</lable>
            <CardsItems {...props}/>
        </div>
    )
  };
};
//this HOC showPromottedLabel will generate CardsItems
export default CardsItems;
