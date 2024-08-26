import React, {  useState } from "react";
import CardsItems from "./CardsItems";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useDisplayRestau from "../utility/useDisplayRestau";
import useOnlineStatus from "../utility/useOnlineStatus";

const Body = () => {
  const { listData, filterData, setfilterData } = useDisplayRestau([]);

  //for to set input value
  const [serchText, setSearchText] = useState("");

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
      <div className="body-container">
        <div className="Search">
          <input
            type="text"
            placeholder="search here"
            value={serchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="input-btn"
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
        <div className="filter">
          <button
            className="filter-btn"
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
      <div className="card-list">
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
