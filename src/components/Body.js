import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";


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
        const data = await fetch(API_URL)

        const json = await data.json()
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // updte filterd state variable after fectch all data for filtering(search)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    
    
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
                <Link 
                   key={restaurant.info.parentId}
                   to={"/restaurants/"+restaurant.info.parentId}>
                    <Restaurantcard  resData={restaurant}/> 
                </Link> 
                ))}
            </div>
        </div>
    )
}


export default Body;