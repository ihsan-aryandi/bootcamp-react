import React from 'react'

import './css/CartItem.css'

export default function CartItem({ productPicture, productPrice, quantity, productName, onIncrement, onDecrement }) {
    return (
        <div className="cart-item">
            <div className="image">
                <img src={productPicture} alt="asd"/>
            </div>
            <div className="product">
                <h4>{productName} <span>({quantity})</span></h4>
                <small>Rp. {productPrice * quantity}</small>
            </div>
            <div className="cta">
                <div className="minus" onClick={onDecrement}>-</div>
                <div className="plus" onClick={onIncrement}>+</div>
            </div>
        </div>
    )
}
