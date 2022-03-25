import React from 'react'
import mocha from '../images/mocha.jpeg'
import ald from '../images/ald.jpeg'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="splash-container">
      <img src={ald} className="splash-image"></img>
      <div className="tblock">
        <div className="oblock">
          <img src={mocha}></img>
          <h2>Category</h2>
            <p className="cat-desc">All domestic orders are shipped via UPS and all international orders are shipped via DHL. This item ships in 5-7 business days. All packages are insured and trackable. An email containing the tracking number will be sent to you when the order ships.</p>
        </div>
        <div className="oblock">
          <img src={ald}></img>
          <h2>Category</h2>
          <p className="cat-desc">All domestic orders are shipped via UPS and all international orders are shipped via DHL. This item ships in 5-7 business days. All packages are insured and trackable. An email containing the tracking number will be sent to you when the order ships.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage