import { RESimg_URL } from "../utils/constants";

const Restaurantcard = ({resData}) => {

    const {name, cuisines,avgRating, costForTwo,sla} = resData?.info
    return (
        <div className="res-card">
            <img
            className="res-logo"
             src={RESimg_URL}
             />
            <h3>{name}</h3>
            <h3>{cuisines[0]}</h3>
            <h3>{avgRating} Star Ratings</h3>
            <h3> {costForTwo}</h3>
            <h3>{sla?.deliveryTime} minutes Delivery</h3>
        </div>
    )
}


export default Restaurantcard;