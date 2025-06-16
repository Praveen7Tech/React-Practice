import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [LoginBtn, setLogoutBtn] = useState("Login")
    console.log("login button click")

    const onlineStatus = useOnlineStatus()

    // subscribing Reduc store for real count
    const cartItems = useSelector((store) => store.cart.Items)
    
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg m-2 border">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL}/>
            </div>
            <div className="items-center">
                <ul className="flex p-12 gap-8">
                    <li>Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/" className="nav-ul">Home</Link></li>
                    <li><Link to="/about" className="nav-ul">About Us</Link></li>
                    <li><Link to="/contact" className="nav-ul">Contact</Link></li>
                    <li className="text-xl font-bold">
                        <Link to="/cart" className="nav-ul">Cart ({cartItems.length} Items)</Link>
                    </li>
                    <button className="login" onClick={() => {
                        LoginBtn === "Login" ? setLogoutBtn("Logout") : setLogoutBtn("Login")
                    }}
                    >
                        {LoginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;