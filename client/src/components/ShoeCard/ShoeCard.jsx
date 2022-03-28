import React from 'react'
import './ShoeCard.css'
import fav from '../images/fav.svg'

const ShoeCard = ({ sneaker }) => {
    const { id, brand, title, price, imageone } = sneaker;


  return (
      <div className="shoecontainer">
    <div className="shoecard">
        <img src={imageone} style={{width: "275px"}}/>
        <h3>{title}</h3>
        <h3>$ {price}</h3>
    </div>
    </div>
  )
}

export default ShoeCard