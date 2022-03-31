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
                        <img src="https://img.stadiumgoods.com/15/95/78/61/15957861_29809198_2048.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/27">
                        <img src="https://img.stadiumgoods.com/16/81/96/45/16819645_34397436_2048.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/9">
                        <img src="https://img.stadiumgoods.com/12/96/02/38/12960238_34435897_2048.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/6">
                        <img src="https://img.stadiumgoods.com/jordan-kids-air-jordan-1-retro-high-og-bg-unc_13157688_34424154_2048.jpg" />
                    </a>
                </figure>
                <figure className="sli-c">
                    <a href="/sneakers/14">
                        <img src="https://img.stadiumgoods.com/adidas-yeezy-yeezy-boost-700-utility-black_14244732_34498013_2048.jpg" />
                    </a>
                </figure>
            </div>
        </div>
    )
}

export default Slider