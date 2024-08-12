// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { Menu_Api } from "../utility/constants";
import useRestaurantMenu from "../utility/useRestaurantMenu";
const RestaurantMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //creating a custom hook, for making RestaurantMenu component's job only for displaying the resaturants.

  //defined a custom hook to fetch the restaurant datas
  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const data = await fetch(Menu_Api + resId);
  //     const json = await data.json();

  //     setResInfo(json.data);
  //   };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <div className="info">
        <h1>{name}</h1>
        <p>{costForTwoMessage}</p>
        <p>{cuisines.join()}</p>

        <h3>Menu</h3>
        <ul>
          {itemCards
            ? itemCards.map((item) => {
                return (
                  <li key={item.card.info.id}>
                    {" "}
                    {item.card.info.name} -{"Rs:"} {item.card.info.price / 100}{" "}
                    {"/-"}
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
