import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartCard from '../CartCard/CartCard.jsx';
import './Cart.css';

const Cart = () => {

const [ cartObj, setCartObj ] = useState([])



 const fetchData = () => {
    fetch( `/cart_items`)
    .then((r) => r.json())
    .then((data) => setCartObj(data))
  };

useEffect(() => {
    fetchData();
  
  }, []);

  console.log(cartObj);
  


  return (
    <div className="shoecontainer">
      {/* {cartObj.map((sneaker) => (
        <CartCard
          key={sneaker.id}
          sneaker={sneaker}
          handleButtonClick={handleButtonClick}
          />
      ))} */}
    </div>
  )
}

export default Cart