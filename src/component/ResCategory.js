import React, { useState } from "react";
import ItemListInAccordion from "./ItemListInAccordion";

const ResCategory = ({ data ,showItems,setShowIndex}) => {
  // const [showItems, setShowItems] = useState(false);
  //need to give the controller to its parents, to give its parents have the controller to the state
//if we give the state in ResCategory, when we click the next accordion, previous one wont collapse.
//so need to giv ethe controll to its parent that is RestaurantMenu (look at the compiler)
  const handleClick = () => {
    // setShowItems(!showItems); //to toggle
    setShowIndex()
  };

  return (
    <div>
      {/* accordian header */}
      <div className="w-6/12  bg-gray=50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* accordian body   */}
        {showItems && <ItemListInAccordion items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
