import React from 'react'
import './ShoeCard.css'
import fav from '../images/fav.svg'
import { Link } from 'react-router-dom'

const ShoeCard = ({ sneaker, handleButtonClick }) => {
    const { id, brand, title, price, imageone } = sneaker;


  return (
      <div className="shoecontainer">
          <Link to={`/sneakers/${id}`}>
    <div className="shoecard" onClick={handleButtonClick} >
        <img src={imageone} style={{width: "275px"}}/>
        <h3>{title}</h3>
        <h3>$ {price}</h3>
    </div>
    </Link>
    </div>
    
  )
}

export default ShoeCard