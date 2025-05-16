import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // Find the one restaurant that matches the resId
    const matchedRestaurant = restaurants.find(
      (res) => res.info.parentId === resId
    );

    setRestaurant(matchedRestaurant?.info);
  };

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
