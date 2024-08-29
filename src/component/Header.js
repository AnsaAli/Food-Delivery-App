import React, { useContext, useState } from "react";
import { Logo_img } from "../utility/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [change, setChnage] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((state)=> state.cart.items);
    console.log(cartItems)

    return (
        <div className="nav-bar flex justify-between shadow-sm px-8" >
            <div className="logo-container">
                <img className="logo w-32" src={Logo_img} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex gap-8 p-8 text-xl font-semibold">
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
                        <Link className="home-link" to={"/groceries"}>Groceries</Link>
                    </li>
                    <li>
                        <Link className="home-link font-bold uppercase" to={"/cart"}>Cart {cartItems.length} </Link>
                    </li>
                   
                    <li>
                        <Link className="home-link font-bold" >Welcome {loggedInUser}!</Link>
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