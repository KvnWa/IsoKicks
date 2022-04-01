import React, { useEffect } from 'react'
import './CartCard.css'

const CartCard = ({ cart, id, deleteForever }) => {

    const handleRemoveClick = () => {
        fetch(`/cart_items/${id}`, {
            method: 'DELETE',
        }).then((r) => r.json())
            .then(deleteForever(id));
    };


    console.log(id)
    return (
        <div className="cart">
            <div className="cart-body">
                <div className="cart-left">
                    <div className="cart-left-i">
                        <img src={cart.sneaker.imagefour} className="cart-img"></img>
                        <div className="single-item">
                        <p>{cart.sneaker.title}</p>
                        <p>${cart.sneaker.price}</p>
                        <p>Size {cart.size}</p>
                        </div>
                    </div>
                    <div className="cart-left-d">
                    </div>
                </div>
                <button onClick={handleRemoveClick} className="remove-cart"></button>
            </div>
        </div>
    )
}

export default CartCard