import React from "react";

const Header = ()=>{

    return(
        <div className="nav-bar">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?"/>
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