import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import cart from '../images/cart.svg'
import exit from '../images/exit.svg'
import fav from '../images/fav.svg'
import search from '../images/search.svg'
import user from '../images/user.svg'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <span className="leftside">
                    <img src={search}></img>
                </span>
                <span>
                    <img src={fav}></img>
                </span>
                <h1 className="navbar-logo">Iso Kicks</h1>
                <span className="rightside">
                    <Link to="/login">
                        <img src={user}></img>
                    </Link>
                </span>
                <span>
                    <Link to="/cart">
                        <img src={cart}></img>
                    </Link>
                </span>
            </div>
        </nav>
    )
}

export default Navbar