import React, {useState, useEffect} from 'react'
import mocha from '../images/mocha.jpeg'
import ald from '../images/ald.jpeg'
import './LandingPage.css'
import Slider from '../Slider/Slider'
import axios from 'axios'


const LandingPage = ({sneakers}) => {



  return (
    <div className="splash-container">
      <div className="data-panel">
        <div className="bottom-left">
          <div className="data-container">Nike</div>
          <div className="data-title">
            Sacai x Nike
          </div>
          <div className="data-desc">
          Japan-based fashion house Sacai presents its avant-garde styling to create bold, layered versions of classic Nike models with a “doubled-up” effect. Find all of the sought-after Sacai x Nike collaborations here.
          </div>
          <button className="data-button">Shop Now</button>
        </div>
      <img src='https://www.stadiumgoods.com/BWStaticContent/54000/a31867eb-ef82-4774-9a03-1a257788969b_220328-dd1875-001-desktop-1.jpg' className="splash-image"></img>
      </div>
      <div className="tblock">
        <div className="oblock">
          <img src={mocha}></img>
          <h2>Category</h2>
          <p className="cat-desc">All domestic orders are shipped via UPS and all international orders are shipped via DHL. This item ships in 5-7 business days. All packages are insured and trackable. An email containing the tracking number will be sent to you when the order ships.</p>
          <button>Shop</button>
        </div>
        <div className="oblock">
          <img src={ald}></img>
          <h2>Category</h2>
          <p className="cat-desc">All domestic orders are shipped via UPS and all international orders are shipped via DHL. This item ships in 5-7 business days. All packages are insured and trackable. An email containing the tracking number will be sent to you when the order ships.</p>
          <button>Shop</button>
        </div>
      </div>
      <Slider sneakers={sneakers}/>
    </div>
  )
}

export default LandingPage