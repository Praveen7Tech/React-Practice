import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// redux store
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxStore/cartSlice";

const RestaurantMenu = () => {
   const { resId } = useParams();
   // redux store
  const dispatch = useDispatch()

  const restaurant = useRestaurantMenu(resId)
  if (!restaurant) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage } = restaurant;

  
  const AddToCart = ()=>{
    dispatch(addItem(restaurant))
  }

  return (
    <>
    <div className="menu">
      <h2>{name}</h2>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Average Rating: {avgRating}</p>
      <p>Cost: {costForTwoMessage}</p>
    </div>
    <div>
      <button className="p-3 m-3 bg-black text-white rounded-xl" 
      onClick={AddToCart}>Add To Cart</button>
    </div>
    </>
  );
};

export default RestaurantMenu;
