import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePedagangProduct } from '../actions/users'

import './css/PedagangPage.css'

import FormPedagang from '../components/FormPedagang'
import CardProduct from '../components/CardProduct'

export default function PedagangPage({ redirect }) {
    const dispatch = useDispatch()
    const [action, setAction] = useState('insert')
    const [productEdit, setProductEdit] = useState(null)
    const usersState = useSelector(state => state.UsersReducer)
    
    const authUser = useSelector(state => state.LoginReducer)

    if(!authUser.isLoggedIn || authUser.user.role !== "pedagang") { 
        redirect('/') 
        return null
    }
    
    const userProducts = usersState.find(value => value.id === authUser.user.id).products

    const handleEdit = id => {
        const product = userProducts.find(product => product.id === id)

        setProductEdit(product)
        setAction('update')
    }

    const handleDelete = id => {
        const conf = window.confirm('Apakah anda yakin ingin menghapus data ini ?');

        if(!conf) return

        dispatch(deletePedagangProduct(authUser.user.id, id))
    }

    return (
        <>
            <h2>Selamat Datang {authUser.user.name}</h2>
            <h1 style={{ marginBottom: 50, textAlign: 'center' }}>Produk Anda</h1>
            <div className="pedagang-content">
                <FormPedagang 
                    action={action} 
                    setAction={setAction} 
                    productEdit={productEdit} 
                    user={authUser.user}
                />

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