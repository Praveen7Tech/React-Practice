import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    // useState - Hooks
    const [ListOfRestaurants, setListOfRestaurant] = useState(resList)

    return (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick={() => {
                    const filterList = ListOfRestaurants.filter(res => res.starRating > 4.0)
                    setListOfRestaurant(filterList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {ListOfRestaurants.map((restaurant) => (
                    <Restaurantcard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}


export default Body;