import { useState, useEffect } from "react"
import { API_URL } from "./constants"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData()
    },[])

   const fetchData = async () => {
      const data = await fetch(API_URL)
      const json = await data.json()
      const restaurant = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const matchedRestaurant = restaurant.find((res) => res.info.parentId === resId)
      
      setResInfo(matchedRestaurant?.info)
   }

   return resInfo;
}

export default useRestaurantMenu;