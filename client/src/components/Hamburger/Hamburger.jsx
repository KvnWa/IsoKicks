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
                    <a href="product"><li>Shop All</li></a>
                    <a href="#"><li>Nike</li></a>
                    <a href="#"><li>Adidas</li></a>
                    <a href="#"><li>New Balance</li></a>
                    <a href="#"><li>Mens</li></a>
                    <a href="#"><li>Womens</li></a>
                    <a href="#"><li>Kids</li></a>
                    <a href="product"><li>Apparel</li></a>
                    <a href="#"><li>Jordan</li></a>
                    <a href="#"><li style={{color: "#a41d23"}}>Sale</li></a>
          
                    
                
                </ul>
            </div>
        </nav>
    )
}

export default Hamburger