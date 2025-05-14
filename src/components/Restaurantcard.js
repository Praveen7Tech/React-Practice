import { RESimg_URL } from "../utils/constants";

const Restaurantcard = ({resData}) => {

    const {name, cuisine,starRating, price,timeToDelivery} = resData
    return (
        <div className="res-card">
            <img
            className="res-logo"
             src={RESimg_URL}
             />
            <h3>{name}</h3>
            <h3>{cuisine}</h3>
            <h3>{starRating} Star Ratings</h3>
            <h3>₹ {price}</h3>
            <h3>{timeToDelivery} Delivery Time</h3>
        </div>
    )
}


export default Restaurantcard;