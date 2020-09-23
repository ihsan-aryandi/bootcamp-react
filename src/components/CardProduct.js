import React from 'react'

import './css/CardProduct.css'

export default function CardProduct({ productPicture, productName, productPrice, productStock, isAdmin = false, onAddToCart, onEdit, onDelete }) {
    
    const cta = !isAdmin 
        ? <button className="add-to-cart" onClick={onAddToCart}>Tambah Keranjang</button>
        : <div className="cta">
            <button className="edit" onClick={onEdit}>Edit</button>
            <button className="delete" onClick={onDelete}>Delete</button>
          </div>
    
    return (
        <div className="card-product">
            <div className="image">
                <img src={productPicture} alt={productName}/>
            </div>
            <div className="body">
                <h3>{productName}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>Rp. {productPrice}</p>
                    <span>Stock {productStock}</span>
                </div>
                {cta}
            </div>
        </div>
    )
}
