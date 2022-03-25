import React from 'react'
import './Hamburger.css'

const Hamburger = () => {
    return (

        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Shop All</li></a>
                    <a href="#"><li>Nike</li></a>
                    <a href="#"><li>Adidas</li></a>
                    <a href="#"><li>New Balance</li></a>
                    <a href="#"><li>Mens</li></a>
                    <a href="#"><li>Womens</li></a>
                    <a href="#"><li>Kids</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Hamburger