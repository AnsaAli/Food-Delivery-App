import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //creating a custom hook, for making RestaurantMenu component's job only for displaying the resaturants.
  
  const [showIndex, setShowIndex] = useState(null);
  //initially showIndex is 0, but 0th one always expand. so need to pass null
  //then need to set the showIndex in its child, like setShowIndex= {()=>setShowIndex(index)}

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card;
  // console.log(
  //   "itemCards===========",
  //   resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories: ", categories);
  return (
    <div className="text-center my-10">
      <div className="info">
        <h1 className="font-bold mb-5 text-2xl">{name}</h1>
        <p className="font-semibold">
          {cuisines.join()} - {costForTwoMessage}
        </p>

        {/* categories accordions */}
        {categories.map((category, index) => (
          //controlled component , controlled by its parent Restaurantmenu
          //showItems={true} will show all the accordion
          //showItems={index=== 0 ? true : false}
          //showItems={index=== 1 ? true : false} ...
          <ResCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
