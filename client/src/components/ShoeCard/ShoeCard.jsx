import React from 'react'
import './ShoeCard.css'
import fav from '../images/fav.svg'

const ShoeCard = () => {


const shoe = {
    brand: "nike",
    price: "$450",
    title: "Jordan 1 Dark Mocha",
    image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dark-Mocha-2-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&trim=color&q=90&dpr=2&updated_at=1616187367"
}



  return (
      <div className="shoecontainer">
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
        <img src={fav} className="heart"></img>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    <div className="shoecard">
        <img src={shoe.image}/>
        <h3>{shoe.title}</h3>
        <h3>{shoe.price}</h3>
    </div>
    </div>
  )
}

export default ShoeCard