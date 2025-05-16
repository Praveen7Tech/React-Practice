import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

const Header = () => {
    const [LoginBtn, setLogoutBtn] = useState("Login")
    console.log("login button click")

    // // useEffect
    // useEffect(() => {
    //     console.log("USE eFFECT CALLEDT")
    // },[LoginBtn])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-Items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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