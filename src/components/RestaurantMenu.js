import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
   const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId)

  if (!restaurant) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } = restaurant;

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Average Rating: {avgRating}</p>
      <p>Cost: {costForTwoMessage}</p>
    </div>
  );
};

export default RestaurantMenu;
