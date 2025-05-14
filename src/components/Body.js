import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                {resList.map((restaurant) => (
                    <Restaurantcard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}


export default Body;