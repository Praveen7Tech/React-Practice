import { API_URL } from "./constants";
import { useState, useEffect } from "react";

const useBody = () => {

    const [ListOfRestaurants, setListOfRestaurant] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async ()=> {
        const data = await fetch(API_URL);
        const json = await data.json()

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // updte filterd state variable after fectch all data for filtering(search)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("suii",json?.data?.cards)
    }

    return {
        ListOfRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        searchValue,
        setSearchValue
    }

}

export default useBody;