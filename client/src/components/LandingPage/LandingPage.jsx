import React, { useState, useEffect } from 'react'
import mocha from '../images/mocha.jpeg'
import ald from '../images/ald.jpeg'
import './LandingPage.css'
import Slider from '../Slider/Slider'
import axios from 'axios'
import Container from 'bootstrap';


const LandingPage = ({ sneakers }) => {

  return (
    <div className="img-fluid">
    <div className="splash-container">
      <div className="grey-bar">
        <ul className="grey-items">
          <li>JORDAN</li>
          <li>NIKE</li>
          <li>YEEZY</li>
          <li>ADIDAS</li>
          <li>WOMEN</li>
          <li>APPAREL</li>
          <li>ALL BRANDS</li>
          <li>SHOP BY</li>
          
        </ul>
      </div>
      <div className="data-panel">
        <div className="bottom-left">
          <div className="data-container">Nike</div>
          <div className="data-title">
            Sacai x Nike
          </div>
          <div className="data-desc">
            Japan-based fashion house Sacai presents its avant-garde styling to create bold, layered versions of classic Nike models with a “doubled-up” effect. Find all of the sought-after Sacai x Nike collaborations here.
          </div>
          <button className="data-button"><a href="product" style={{color: "#a41d23"}}>Shop Now</a></button>
        </div>
        <img src='https://www.stadiumgoods.com/BWStaticContent/54000/a31867eb-ef82-4774-9a03-1a257788969b_220328-dd1875-001-desktop-1.jpg' className="splash-image"></img>
      </div>
      <div className="tblock">
        <div className="oblock">
          <img src="https://www.stadiumgoods.com/BWStaticContent/54000/cfff8cbc-6969-4127-bd24-a1c4a8688fdb_syntk-air-max-1-module-1000x750.jpg"></img>
          <div className="journal">
            <h5 className="red-text">Journal</h5>
            <h4>Sneakers You Need to Know: Nike Air Max 1</h4>
            <p className="cat-desc">Get educated on the most iconic Nike running shoe of all time with a guide to its history, colorways, collaborations, sizing info and more. Do you have a favorite?</p>
            <a className="red-text-1">Read More</a>
          </div>
        </div>
        <div className="oblock">
          <img src='https://www.stadiumgoods.com/BWStaticContent/54000/b0526877-f625-4088-bbff-a7d04e8e2fbb_whm-tiffanythompson-module.jpg'></img>
          <div className="journal">
            <h5 className="red-text">Journal</h5>
            <h4>Celebrating Women’s History Month: Interview With Tiffany Thompson</h4>
            <p className="cat-desc">The renowned interior designer spoke to us about her journey from Nike to her own design business, who inspires her, and of course, her favorite sneakers.
            </p>
            <a className="red-text-1">Read More</a>
          </div>
        </div>
      </div>
      <Slider sneakers={sneakers} />
    </div>
    </div>
   
  )
}

export default LandingPage