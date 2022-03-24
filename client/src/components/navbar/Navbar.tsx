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
        <div className="Navbar">
            <img src={search}></img>
            <img src={fav}></img>
            <h1 className="navbar-logo">Iso Kicks</h1>
            <img src={user}></img>
            <img src={cart}></img>
            
        </div>
    )
}

export default Navbar