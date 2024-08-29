import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  //   const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //creating a custom hook, for making RestaurantMenu component's job only for displaying the resaturants.

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
        {categories.map((category) => (
          <ResCategory key={category?.card?.card.title} data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
