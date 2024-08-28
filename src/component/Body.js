import React, {  useState } from "react";
import CardsItems, {showPromottedLabel} from "./CardsItems";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useDisplayRestau from "../utility/useDisplayRestau";
import useOnlineStatus from "../utility/useOnlineStatus";

const Body = () => {
  const { listData, filterData, setfilterData } = useDisplayRestau([]);

  //for to set input value
  const [serchText, setSearchText] = useState("");

  const ShowPromottedLabelInCards = showPromottedLabel(CardsItems);

  // will show loding while page render
  // if(listData.length === 0){
  //     return <p>Loding..</p>
  // }

  //to show shimmer UI
  if (listData.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body-container flex">
        <div className="Search m-4 p-4 px-10">
          <input
            type="text"
            className="shadow-md p-2 w-60 rounded-l-md"
            placeholder="search here"
            value={serchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="input-btn bg-black text-white p-2.5 rounded-r-md font-semibold uppercase "
            onClick={() => {
              const filteredRestau = listData.filter(
                (restau) =>
                  restau.info.name &&
                  restau.info.name
                    .toLowerCase()
                    .includes(serchText.toLowerCase())
              );
              console.log(serchText);
              setfilterData(filteredRestau);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter m-4 p-4 px-10">
          <button
            className="filter-btn bg-red-500 p-2.5 text-white rounded-md font-semibold uppercase"
            onClick={() => {
              const filterList = filterData.filter((data) => {
                return data.info.avgRatingString > 4.5;
              });

              setfilterData(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="card-list flex flex-wrap px-8">
        { filterData && filterData.length > 0  ? (
          filterData.map((resta) => {
            return (
              <Link
                to={"/restaurants/" + resta.info.id}
                key={resta.info.id}
                className="res-list"
              >
                <CardsItems restauDetails={resta} />
              </Link>
              // if {filterData.info.promotted ?< ShowPromottedLabelInCards restauDetails={resta}/> : <CardsItems restauDetails={resta} />}
            );
          })
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </>
  );
};
export default Body;
