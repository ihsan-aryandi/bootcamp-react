import React, { useEffect, useState } from 'react'
import Input from './Input'
import { addUser, editUserByUserRole } from '../actions/users'

import './css/FormUser.css'
import { useDispatch } from 'react-redux';

export default function FormUser({ action, setAction, userEdit, setUserEdit }) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
        if(userEdit !== null)
        {
            setName(userEdit.name)
            setUsername(userEdit.username)
            setPassword(userEdit.password)
        }
    }, [userEdit])

    const handleSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: name,
            username: username,
            password: password,
            role: "user",
            isActive: password === '' ? false : true,
            productsInCart: []
        }

        if(action === "insert")
        {
            dispatch(addUser(newUser))
        }
        else if(action === "edit")
        {
            dispatch(editUserByUserRole(userEdit.id, newUser))

            alert('Edit data berhasil');

            setAction('insert')
            setUserEdit(null)
        }

        setName('')
        setUsername('')
        setPassword('')
        
        e.target.name.focus()
    }

    return (
        <form className="form-user" onSubmit={handleSubmit}>
            <h2>Form</h2> 
            <> 
                <Input 
                    label="Nama" 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={e => setName(e.target.value)}         
                />

                <Input 
                    label="Username" 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Input 
                    label="Password" 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            </>
            <button type="submit">{action === "insert" ? "Submit" : "Edit"}</button>
        </form>
    )
}