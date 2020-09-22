import React from 'react'

import './css/CardProduct.css'

export default function CardProduct({ image, title }) {
    return (
        <div className="card-product">
            <div className="image">
                <img src={image} alt={title}/>
            </div>
            <div className="body">
                <p>{title}</p>
            </div>
        </div>
    )
}
