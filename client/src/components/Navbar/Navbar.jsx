import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import cart from '../images/cart.svg'
import exit from '../images/exit.svg'
import fav from '../images/fav.svg'
import search from '../images/search.svg'
import user from '../images/user.svg'
import Hamburger from '../Hamburger/Hamburger';
import ProfilePage from '../ProfilePage/ProfilePage.jsx';

const Navbar = ({ signedIn }) => {


    console.log(signedIn)
    return (
        <div>
            <div className="top-bar">
                <div className="mover-container">
                    <div className="mover-1">Shop Top Picks!</div>
                </div>
            </div>
            <div className="navbar">
                <Hamburger />
                <span className="logo">
                    <div>
                        <Link to='/' className="navbar-logo">
                            <h1 >Iso Kicks</h1>
                        </Link>
                    </div>
                </span>
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