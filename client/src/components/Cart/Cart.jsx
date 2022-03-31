import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartCard from '../CartCard/CartCard.jsx';
import './Cart.css';
import { data } from 'autoprefixer';

const Cart = () => {

const [ cartObj, setCartObj ] = useState([])
const [userId, setUserId] = useState(null)
const [totalPrice, setTotalPrice] = useState("")


 const fetchData = () => {
    fetch( `/cart_items`)
    .then((r) => r.json())
    .then((data) => {
      setCartObj(data)
    })
  };

useEffect(() => {
    fetchData();
      fetch("/me")
      .then(resp => resp.json())
      .then(data => {
        setUserId(data.id)
        setTotalPrice(data.price_total)
      })
  }, []);

  const filterUser = cartObj.filter(cart => cart.user_id === userId);
  console.log(filterUser);

  function deleteForever(id) {
    const deleted = cartObj.filter(cart => { return cart.id !== id})
    setCartObj(deleted)
  }

  // if(filterUser.length === 0) {
  //   return null
  // } else {
  //   const sumUserPrice = filterUser.reduce((a, b) => a.sneaker.price + b.sneaker.price, 0)
  //   console.log(sumUserPrice)
  // }




  return (
    <div className="shoecontainer">
      <h2 className="cart-header">Shopping Cart</h2>
      {filterUser.map((cart) => (
        <CartCard
          key={cart.id}
          id={cart.id}
          cart={cart}
          deleteForever={deleteForever}
          />
      ))}
      <div className="cart-right">
          <div className="cart-right-d">
            <div>Order Summary</div>
            <div>Subtotal: ${totalPrice}</div>
            <div>Estimated Shipping: FREE</div>
            <div>TOTAL: ${totalPrice}</div>
          </div>
          <div className="checkout-container">
          <span>4 interest-free payments with <strong>Klarna</strong></span>
          <button>CHECKOUT</button>
          </div>
        </div>
    </div>
  )
}

export default Cart