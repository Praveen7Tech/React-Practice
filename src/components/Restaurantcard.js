import { RESimg_URL } from "../utils/constants";

const Restaurantcard = ({resData}) => {

    const {name, cuisines,avgRating, costForTwo,sla} = resData?.info
    return (
        <div className="p-4 m-3 w-[250px] bg-gray-100 rounded-md hover:bg-gray-200">
            <img
            className="rounded-xl"
             src={RESimg_URL}
             />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h3>{cuisines[0]}</h3>
            <h3>{avgRating} Star Ratings</h3>
            <h3> {costForTwo}</h3>
            <h3>{sla?.deliveryTime} minutes Delivery</h3>
        </div>
    )
}


export default Restaurantcard;