import React from 'react'

const CartCard = () => {
  return (
    <div className="cart">
      <h2 className="cart-header">Shopping Cart</h2>
      <div className="cart-body">
        <div className="cart-left">
          <div className="cart-left-i">
            {/* <img src={sneaker.image}></img> */}
          </div>
          <div className="cart-left-d">
            {/* <div>{sneaker.title}</div> */}
            {/* <div className="c1">{sneaker.brand}</div> */}
            {/* <div className="c1">Size {sneaker.size}</div> */}
          </div>
          <div className="item-price">
            {/* <div>${sneaker.price}</div> */}
          </div>
        </div>
        <div className="cart-right">
          <div className="cart-right-d">
            <div>Order Summary</div>
            <div>Subtotal: $265</div>
            <div>Estimated Shipping: $12</div>
            <div>TOTAL: $277</div>
          </div>
          <div className="checkout-container">
          <span>4 interest-free payments with <strong>Klarna</strong></span>
          <button>CHECKOUT</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartCard