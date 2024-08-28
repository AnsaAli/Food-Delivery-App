import React from "react";

const ResCategory = ({data}) => {
    console.log("categories: ResCategory", data);
  return (
    <div>
      {/* accordian header */}
      <div className="w-6/12  bg-gray=50 shadow-lg p-4 mx-auto my-4 flex justify-between">
        <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
   {/* accordianbody   */}
    </div>
  );
};

export default ResCategory;
