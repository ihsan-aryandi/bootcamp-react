import React from 'react'

import CartItem from './CartItem'

import './css/Cart.css'

export default function Cart({ user, setUsers }) {

    const handleIncrement = product => {
        const currentProduct = user.productsInCart.find(value => value.id === product.id)

        if((currentProduct.quantity + 1) > product.productStock) return alert('Jumlah barang sudah maksimal')

        setUsers(prevUsers => {
            const newData = [...prevUsers]
            const userIndex = newData.findIndex(value => value.id === user.id)
            const productIndex = newData[userIndex].productsInCart.findIndex(value => value.id === currentProduct.id)
            newData[userIndex].productsInCart[productIndex] = { ...newData[userIndex].productsInCart[productIndex], quantity: currentProduct.quantity + 1 }

            return newData;
        })
    }

    const handleDecrement = product => {
        const currentProduct = user.productsInCart.find(value => value.id === product.id)

        if((currentProduct.quantity - 1) < 1) 
        {
            setUsers(prevUsers => {
                const newData = [...prevUsers]
                const userIndex = newData.findIndex(value => value.id === user.id)
                newData[userIndex].productsInCart = newData[userIndex].productsInCart.filter(value => value.id !== currentProduct.id)
    
                return newData;
            })
        }
        else
        {
            setUsers(prevUsers => {
                const newData = [...prevUsers]
                const userIndex = newData.findIndex(value => value.id === user.id)
                const productIndex = newData[userIndex].productsInCart.findIndex(value => value.id === currentProduct.id)
                newData[userIndex].productsInCart[productIndex] = { ...newData[userIndex].productsInCart[productIndex], quantity: currentProduct.quantity - 1 }
    
                return newData;
            })
        }
    }

    return (
        <div className="cart-bubble">
            <label className="bubble" htmlFor="toggler">Keranjang</label>
            <input className="toggler" type="checkbox" id="toggler"/>
            <div className="cart-items">
                {user.productsInCart.map(product => (
                    <CartItem {...product} key={product.id} onIncrement={() => handleIncrement(product)} onDecrement={() => handleDecrement(product)} />
                ))}
            </div>
        </div>
    )
}