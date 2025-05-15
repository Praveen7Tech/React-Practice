import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    // useState - Hooks
    const [ListOfRestaurants, setListOfRestaurant] = useState([]) 
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchValue, setSearchValue] = useState("")
    

    useEffect(() => {
        fetchData()
    }, [])

    // api call to fetch data
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // updte filterd state variable after fectch all data for filtering(search)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // add shimmer ui while page loading  / conditional rendering
    // if(ListOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-bor" value={searchValue} 
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    />
                    <button onClick={() => {
                        console.log("List-",ListOfRestaurants)
                        const filteredSearch = ListOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                        );
                        console.log("fill-",filteredSearch)

                        setFilteredRestaurants(filteredSearch)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterList = ListOfRestaurants.filter(res => res.info.avgRating > 4.5)
                    setFilteredRestaurants(filterList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restro-container">
                {filteredRestaurants.map((restaurant) => (
                    <Restaurantcard key={restaurant.info.parentId} resData={restaurant}/>
                ))},

                {/* for filterin values to render while using mockData(dummy)
                {filteredRestaurants.map((restaurant, index) => (
                    <Restaurantcard key={index} resData={restaurant}/>
                ))} */}
            </div>
        </div>
    )
}


export default Body;