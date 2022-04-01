import React from 'react'
import './Footer.css'
import amex from '../images/amex.svg';
import paypal from '../images/paypal.svg';
import klarna from '../images/klarna.svg';
import union from '../images/union.svg';
import mastercard from '../images/mastercard.svg';
import visa from '../images/visa.svg';

const Footer = () => {
  return (
    <div>
      <div className="footer">Iso Kicks © &nbsp;&nbsp;&nbsp;
        <div className="footer-right">
          <img src={visa}></img>
          <img src={mastercard}></img>
          <img src={klarna}></img>
          <img src={union}></img>
          <img src={amex}></img>
          <img src={paypal}></img>
        </div>
      </div>

    </div>

  )
}

export default Footer