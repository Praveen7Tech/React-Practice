import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(restaurants);
  };

  if (restaurantList === null) return <Shimmer />;

  return (
    <div className="menu">
      <h2>Restaurants</h2>
          <div key={id} className="restaurant-card">
            <h3>Name :</h3>
            <p>Cuisines: </p>
            <p>Average Rating: </p>
            <p>Cost: </p>
            <hr />
          </div>
    </div>
  );
};

export default RestaurantMenu;
