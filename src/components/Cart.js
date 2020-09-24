import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItemFromCart } from '../actions/users'

import CartItem from './CartItem'

import './css/Cart.css'

export default function Cart() {
    const dispatch = useDispatch()
    const authUser = useSelector(state => state.LoginReducer)
    const userProductsInCart = useSelector(state => {
        return state.UsersReducer.find(user => user.id === authUser.user.id).productsInCart
    })

    const handleIncrement = product => {
        const currentProduct = userProductsInCart.find(value => value.id === product.id)

        if((currentProduct.quantity + 1) > product.productStock) return alert('Jumlah barang sudah maksimal')        

        dispatch(incrementQuantity(authUser.user.id, product.id))
    }

    const handleDecrement = product => {
        const currentProduct = userProductsInCart.find(value => value.id === product.id)

        if((currentProduct.quantity - 1) < 1) 
        {
            dispatch(removeItemFromCart(authUser.user.id, product.id))
        }
        else
        {
            dispatch(decrementQuantity(authUser.user.id, product.id))
        }
    }

    return (
        <div className="cart-bubble">
            <label className="bubble" htmlFor="toggler">Keranjang</label>
            <input className="toggler" type="checkbox" id="toggler"/>
            <div className="cart-items">
                 {userProductsInCart.map(product => (
                    <CartItem {...product} key={product.id} onIncrement={() => handleIncrement(product)} onDecrement={() => handleDecrement(product)} />
                ))}
            </div>
        </div>
    )
}