import React from 'react'

import './css/UserPage.css'

export default function UserPage({ user }) {
    return (
        <>
            <h2>Selamat Datang { user.name }</h2>
            <h1 style={{ marginBottom: 50, textAlign: 'center' }}>Produk</h1>
            <div className="products">
                <div className="product">Iphone 11 Pro Maag</div>
                <div className="product">Xiomay Redmi 5A</div>
                <div className="product">Kaos Polos</div>
                <div className="product">Celana Jeans</div>
                <div className="product">Magicom</div>
                <div className="product">Kulkas 80 Pintu</div>
                <div className="product">Kasur Bekas</div>
                <div className="product">Dispenser</div>
            </div>   
        </>
    )
}
