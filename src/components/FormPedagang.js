import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './css/FormPedagang.css'

import Input from './Input'

export default function FormPedagang({ action, setAction, productEdit, setUsers, user }) {
    const [input, setInput] = useState({
        productName: '',
        productPicture: '',
        productPrice: '',
        productStock: ''
    })

    useEffect(() => {
        if(productEdit !== null)
        { 
            setInput({
                productName: productEdit.productName,
                productPicture: productEdit.productPicture,
                productPrice: productEdit.productPrice,
                productStock: productEdit.productStock
            })
        }
    }, [productEdit])

    const handleSubmit = e => {
        e.preventDefault()

        if(action === "insert")
        {
            setUsers(prevProducts => {
                const newData = [...prevProducts]
                const index = newData.findIndex(value => value.id === user.id)
                newData[index].products.push({ id: uuidv4(), ...input })

                return newData
            })
        } 
        else if(action === "update")
        {
            setUsers(prevProducts => {
                const newData = [...prevProducts]
                const userIndex = newData.findIndex(u => u.id === user.id)
                const productIndex = user.products.findIndex(product => product.id === productEdit.id)
                newData[userIndex].products[productIndex] = { ...newData[userIndex].products[productIndex], ...input }

                return newData
            })

            setAction('insert')
        }

        setInput({
            productName: '',
            productPicture: '',
            productPrice: '',
            productStock: ''
        })
    }
    
    const handleInput = e => {
        const set = { [e.target.name]: e.target.value }
        setInput(prevState => {
            return { ...prevState, ...set }
        })
    }

    return (
        <form className="form-user" onSubmit={handleSubmit}>
            <h2>Form</h2>  
            <Input 
                label="Nama Produk" 
                type="text"
                name="productName" 
                value={input.productName}
                onChange={handleInput}         
            />

            <Input 
                label="Foto Produk" 
                type="text"
                name="productPicture"
                placeholder="https://photos/image.jpg" 
                value={input.productPicture}
                onChange={handleInput}
            />
            <Input 
                label="Harga" 
                type="number" 
                name="productPrice" 
                value={input.productPrice} 
                onChange={handleInput}
            />
            <Input 
                label="Stock" 
                type="number" 
                name="productStock" 
                value={input.productStock} 
                onChange={handleInput}
            />
            <button type="submit">{action === "insert" ? "Submit" : "Edit"}</button>
        </form>
    )
}
