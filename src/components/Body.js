import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    // useState - Hooks
    const [ListOfRestaurants, setListOfRestaurant] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    // api call to fetch data
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=9.9312328&lng=76.26730409999999&str=resta&trackingId=undefined&includeIMItem=true")

        const json = await data.json()
        console.log(json)
        setListOfRestaurant(json.data.suggestions)
    }

    // add shimmer ui while page loading
    if(ListOfRestaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="search">
                <button className="filter-btn" onClick={() => {
                    const filterList = ListOfRestaurants.filter(res => res.starRating > 4.0)
                    setListOfRestaurant(filterList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {ListOfRestaurants.map((restaurant, index) => (
                    <Restaurantcard key={index} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}


export default Body;