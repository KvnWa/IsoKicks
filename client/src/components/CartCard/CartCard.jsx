import React, { useEffect } from 'react'
import './CartCard.css'
import exit from '../images/exit.svg'
import edit from '../images/edit.svg'
import fav from '../images/fav.svg'


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
                        <div className="ccc">
                            <div className="single-item">
                                <h5 className="s5">{cart.sneaker.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${cart.sneaker.price}</h5>
                                <div className="size-cont" >
                                    <h6>Size {cart.size}&nbsp;&nbsp;&nbsp; </h6>
                                    <div onClick={handleRemoveClick} style={{ cursor: "pointer" }} className="remove-a">
                                            <img src={exit} alt="asd" className="exit" style={{width: "10px"}}></img>
                                            <h6>&nbsp;&nbsp;Remove</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-left-d">
                    </div>
                </div>

            </div>


        </div>


    )
}

export default CartCard