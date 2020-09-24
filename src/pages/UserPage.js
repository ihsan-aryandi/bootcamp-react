import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToUserCart, incrementQuantity } from '../actions/users'
import CardProduct from '../components/CardProduct';
import Cart from '../components/Cart'

import './css/UserPage.css'

import useProducts from '../functions/useProducts'

export default function UserPage({ redirect }) {
    const dispatch = useDispatch()
    const authUser = useSelector(state => state.LoginReducer)
    const users = useSelector(state => state.UsersReducer)
    const products = useProducts(users);

    if(!authUser.isLoggedIn || authUser.user.role !== "user") {
        redirect('/')
        return null
    }

    const handleAddToCart = product => {

        const userIndex = users.findIndex(user => user.id === authUser.user.id)
        const currentProduct = users[userIndex].productsInCart.find(value => value.id === product.id)

        if(currentProduct === undefined)
        {
            const data = {
                ...product,
                quantity: 1
            }

            dispatch(addToUserCart(authUser.user.id, data))
        }
        else
        {
            if((currentProduct.quantity + 1) > product.productStock) return alert('Jumlah barang sudah maksimal')

            dispatch(incrementQuantity(authUser.user.id, product.id))

        }

        alert(`${product.productName} disimpan ke keranjang`)
    }

    return (
        <>
            <h2>Selamat Datang {authUser.user.name}</h2>
            <h1 style={{ marginBottom: 50, textAlign: 'center' }}>Produk</h1>
            <div className="products">
                {products.map(product => (
                    <CardProduct 
                        key={product.id}
                        productPicture={product.productPicture} 
                        productName={product.productName} 
                        productPrice={product.productPrice} 
                        productStock={product.productStock}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}
            </div>
            <Cart />
        </>
    )
}
