import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [LoginBtn, setLogoutBtn] = useState("Login")
    console.log("login button click")

    const onlineStatus = useOnlineStatus()
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-Items">
                <ul className="nav-ul">
                    <li>Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/" className="nav-ul">Home</Link></li>
                    <li><Link to="/about" className="nav-ul">About Us</Link></li>
                    <li><Link to="/contact" className="nav-ul">Contact</Link></li>
                    <li>Cart</li>
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