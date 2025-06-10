import Restaurantcard, {withVegLabel} from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";


const Body = () => {

    const {
        ListOfRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
        searchValue,
        setSearchValue
    } = useBody()

    // HOC
    const RestaurantCardVegitarian = withVegLabel(Restaurantcard)

    console.log("list of rest",ListOfRestaurants)
    
    // online status
    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false){
        return (
            <h1>Looks like you are in Offline!! please check your Internet connection..</h1>
        )
    }
    
    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-5 m-5 items-center">
                    <input type="text" className="border-solid border-black" value={searchValue} 
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    />
                    <button className="px-4 py-3 bg-green-300 m-5 rounded-lg" onClick={() => {
                        console.log("List-",ListOfRestaurants)
                        const filteredSearch = ListOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                        );
                        console.log("fill-",filteredSearch)

                        setFilteredRestaurants(filteredSearch)
                    }}>Search</button>
                </div>
                <div className="search p-5 m-4 flex">
                    <button className="px-4 py-3 bg-yellow-100 m-5 rounded-lg" onClick={() => {
                    const filterList = ListOfRestaurants.filter(res => res.info.avgRating > 4.5)
                    setFilteredRestaurants(filterList)
                }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                <Link 
                   key={restaurant.info.parentId}
                   to={"/restaurants/"+restaurant.info.parentId} 
                   style={{ textDecoration: "none", color: "black" }}>
                    {restaurant.info?.veg ? (<RestaurantCardVegitarian resData={restaurant}/>) :
                    (<Restaurantcard  resData={restaurant}/>) 
                    } 
                </Link> 
                ))}
            </div>
        </div>
    )
}


export default Body;