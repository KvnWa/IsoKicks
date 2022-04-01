import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import cart from '../images/cart.svg'
import exit from '../images/exit.svg'
import fav from '../images/fav.svg'
import search from '../images/search.svg'
import user from '../images/user.svg'
import Hamburger from '../Hamburger/Hamburger';
import kicks from '../images/kicks.png'
import left from "../images/left.svg"

import ProfilePage from '../ProfilePage/ProfilePage.jsx';

const Navbar = ({ signedIn }) => {


    console.log(signedIn)
    return (
        <div>
            <div className="top-bar">
                <div className="mover-container">
                    <a href="/product" style={{color: "white"}}><div className="mover-1">Shop Top Picks!</div></a>
                </div>
            </div>
            <div className="navbar">
                
                <Hamburger />
                <div className="logo"><a href="/" style={{textDecoration: "none", fontSize: "2em", fontWeight: "bolder", color: "#181818"}}>Iso Kicks</a>
                    
                        {/* <Link to='/' className="navbar-logo">
                            <h1 className="iso-k">Iso Kicks</h1>
                        </Link> */}
                  
                </div>
                <span className="rightside1">{signedIn ?
                    <Link to="/profile">
                        <img src={user}></img>
                    </Link> : <Link to="/login"> <img src={user}></img></Link>}
                </span>
                <span className="rightside2">
                    <Link to="/cart">
                        <img src={cart}></img>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Navbar