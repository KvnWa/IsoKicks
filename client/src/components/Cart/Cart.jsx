import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartCard from '../CartCard/CartCard.jsx';
import './Cart.css';
import { data } from 'autoprefixer';
import amex from '../images/amex.svg';
import paypal from '../images/paypal.svg';
import klarna from '../images/klarna.svg';
import union from '../images/union.svg';
import mastercard from '../images/mastercard.svg';
import visa from '../images/visa.svg';


const Cart = () => {

  const [cartObj, setCartObj] = useState([])
  const [userId, setUserId] = useState(null)
  const [totalPrice, setTotalPrice] = useState("")


  const fetchData = () => {
    fetch(`/cart_items`)
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
    const deleted = cartObj.filter(cart => { return cart.id !== id })
    setCartObj(deleted)
    window.location.reload();
  }

  // if(filterUser.length === 0) {
  //   return null
  // } else {
  //   const sumUserPrice = filterUser.reduce((a, b) => a.sneaker.price + b.sneaker.price, 0)
  //   console.log(sumUserPrice)
  // }


  return (
    <>
      <h2 className="cart-header">Shopping Cart</h2>
      <div className="shoecontainer5">
        <div className="cart-map">
        {filterUser.map((cart) => (
          <CartCard
            key={cart.id}
            id={cart.id}
            cart={cart}
            deleteForever={deleteForever}
          />
        ))}
        </div>
        <div className="cart-right">
          <div className="cart-right-d">
            <h3>Order Summary</h3>
            <div>Subtotal: ${totalPrice}</div>
            <div>Estimated Shipping: FREE</div>
            <div>TOTAL: ${totalPrice}</div>
          </div>
          <div className="checkout-container">
            <span className="span4">4 interest-free payments with <strong>Klarna</strong></span>
            <button className="checkout-btn">CHECKOUT</button>
            <div className="payment">
              <img src={visa}></img>
              <img src={mastercard}></img>
              <img src={klarna}></img>
              <img src={union}></img>
              <img src={amex}></img>
              <img src={paypal}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart