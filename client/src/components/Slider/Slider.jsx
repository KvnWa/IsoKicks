import React, { useState, useEffect } from 'react'
import ald from "../images/ald.jpeg"
import mocha from "../images/mocha.jpeg"
import './Slider.css'
import axios from 'axios';

const Slider = ({sneakers}) => {


    return (
        <div className="slider-container">
            <h1 className="sli-bottom">Top Kicks</h1>
            <div className="slider">
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={mocha}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
            </div>
        </div>
    )
}

export default Slider