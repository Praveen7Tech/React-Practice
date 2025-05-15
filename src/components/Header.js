import { LOGO_URL } from "../utils/constants";
import {useState} from "react"

const Header = () => {
    const [LoginBtn, setLogoutBtn] = useState("Login")
    console.log("login button click")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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