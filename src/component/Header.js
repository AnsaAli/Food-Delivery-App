import React, { useState } from "react";
import { Logo_img } from "../utility/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
    const [change, setChnage] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img className="logo" src={Logo_img} />
            </div>
            <div className="nav-items">
                <ul>
                <li>
                       {onlineStatus  ?  '🔴' : '🟢'}
                    </li>
                    <li>
                        <Link className="home-link" to="/" >Home</Link>
                    </li>
                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link className="home-link" to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link className="home-link" to={"/contact"}>Contact</Link>
                    </li>
                    <button className="login" onClick={() => {
                         {change === 'Login' ? setChnage('Logout') : setChnage('Login')}
                    }} >
                       {change}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;