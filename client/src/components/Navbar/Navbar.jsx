import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import cart from '../images/cart.svg'
import exit from '../images/exit.svg'
import fav from '../images/fav.svg'
import search from '../images/search.svg'
import user from '../images/user.svg'
import Hamburger from '../Hamburger/Hamburger';

const Navbar = () => {
    return (
        <nav>
            
            <div className="navbar">
                <span className="leftside1">
                    <Hamburger />
                </span>
                <span className="leftside2">
                    <img src={fav}></img>
                </span>
                <span className="logo">
                <Link to='/'>
                <h1 className="navbar-logo">Iso Kicks</h1>
                </Link>
                </span>
                <span className="rightside1">
                    <Link to="/login">
                        <img src={user}></img>
                    </Link>
                </span>
                <span className="rightside2">
                    <Link to="/cart">
                        <img src={cart}></img>
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default Navbar