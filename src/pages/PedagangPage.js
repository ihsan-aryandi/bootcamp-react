import React, { useState } from 'react'

import './css/PedagangPage.css'

import FormPedagang from '../components/FormPedagang'

import CardProduct from '../components/CardProduct'

export default function PedagangPage({ setUsers, users, user, history }) {
    const [action, setAction] = useState('insert')
    const [productEdit, setProductEdit] = useState(null)
    
    if(user === null) return history.push('/login')
    
    const userProducts = user !== null ? user.products : []

    const handleEdit = id => {
        const product = user.products.find(product => product.id === id)

        setProductEdit(product)
        setAction('update')
    }

    const handleDelete = id => {
        const conf = window.confirm('Apakah anda yakin ingin menghapus data ini ?');

        if(!conf) return

        setUsers(prevUsers => {
            const newData = [...prevUsers]
            const userIndex = users.findIndex(u => u.id === user.id)
            newData[userIndex].products = newData[userIndex].products.filter(product => product.id !== id)
        
            return newData
        })
    }

    return (
        <>
            <h2>Selamat Datang {user.name}</h2>
            <h1 style={{ marginBottom: 50, textAlign: 'center' }}>Produk Anda</h1>
            <div className="pedagang-content">
                <FormPedagang action={action} setAction={setAction} productEdit={productEdit} setUsers={setUsers} user={user}/>
                <div className="products">
                    {userProducts.map(product => (

                        <CardProduct
                            key={product.id} 
                            productName={product.productName}                           
                            productPicture={product.productPicture}                           
                            productPrice={product.productPrice}                           
                            productStock={product.productStock}                           
                            isAdmin={true}
                            onEdit={() => handleEdit(product.id)}
                            onDelete={() => handleDelete(product.id)}
                        />

                    ))}
                </div>
            </div>
        </>
    )
}