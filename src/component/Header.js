import React from "react";
import { Logo_img } from "../utility/constants"

const Header = ()=>{

    return(
        <div className="nav-bar">
            <div className="logo-container">
                <img className="logo" src={ Logo_img }/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Items</li>
                    <li>Top Restaurants</li>
                    <li>Popular Dishes</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;