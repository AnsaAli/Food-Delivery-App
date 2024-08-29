import React, { useState } from "react";
import ItemListInAccordion from "./ItemListInAccordion";

const ResCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false)

  const handleClick = ()=>{
    setShowItems(!showItems); //to toggle 
  }

  return (
    <div>
      {/* accordian header */}
      <div className="w-6/12  bg-gray=50 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
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
