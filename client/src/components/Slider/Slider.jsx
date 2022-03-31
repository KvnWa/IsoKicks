import React, { useState, useEffect } from 'react'
import ald from "../images/ald.jpeg"
import mocha from "../images/mocha.jpeg"
import './Slider.css'
import axios from 'axios';

const Slider = ({ sneakers }) => {


    return (
        <div className="slider-container">
            <h1 className="sli-bottom">Top Kicks</h1>
            <div className="slider">
                <figure className="sli-c">
                    <a href="/sneakers/1">
                        <img src="https://img.stadiumgoods.com/15/95/78/61/15957861_29809197_1000.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/27">
                        <img src="https://img.stadiumgoods.com/16/88/32/71/16883271_34398003_1000.jpg"></img>
                        
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/9">
                        <img src="https://img.stadiumgoods.com/12/96/02/38/12960238_34435928_1000.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/6">
                        <img src="https://img.stadiumgoods.com/13/15/76/82/13157682_34423411_1000.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/14">
                        <img src="https://img.stadiumgoods.com/14/24/47/32/14244732_34497844_1000.jpg" />
                    </a>
                </figure>
            </div>
        </div>
    )
}

export default Slider