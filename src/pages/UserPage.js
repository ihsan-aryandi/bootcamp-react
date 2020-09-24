import React from 'react'
import CardProduct from '../components/CardProduct';
import Cart from '../components/Cart'

import './css/UserPage.css'

import useProducts from '../functions/useProducts'

export default function UserPage({ user, users, setUsers, history }) {

    const products = useProducts(users);

    if(user === null) return history.push('/login')

    const handleAddToCart = product => {

        const currentProduct = user.productsInCart.find(value => value.id === product.id)

        if(currentProduct === undefined)
        {
            const data = {
                ...product,
                quantity: 1
            }

            setUsers(prevUsers => {
                const newData = [...prevUsers]
                const userIndex = newData.findIndex(value => value.id === user.id)
                newData[userIndex].productsInCart.push(data)

                return newData;
            })
        }
        else
        {
            if((currentProduct.quantity + 1) > product.productStock) return alert('Jumlah barang sudah maksimal')

            setUsers(prevUsers => {
                const newData = [...prevUsers]
                const userIndex = newData.findIndex(value => value.id === user.id)
                const productIndex = newData[userIndex].productsInCart.findIndex(value => value.id === currentProduct.id)
                newData[userIndex].productsInCart[productIndex] = { ...newData[userIndex].productsInCart[productIndex], quantity: currentProduct.quantity + 1 }

                return newData;
            })
        }

        alert(`${product.productName} disimpan ke keranjang`)
    }

    return (
        <>
            <h2>Selamat Datang { user.name }</h2>
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
            <Cart user={user} users={users} setUsers={setUsers} />
        </>
    )
}
