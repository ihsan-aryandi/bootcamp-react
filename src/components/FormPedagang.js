import React, { useEffect, useState } from 'react'
import Input from './Input'

import './css/FormPedagang.css'

export default function FormPedagang({ setUsers, action, setAction, userEdit, setUserEdit }) {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
        if(userEdit !== null)
        {
            setId(userEdit.id)
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
            role: "pedagang"
        }

        if(action === "insert")
        {
            setUsers(prevUsers => {
                newUser.id = prevUsers.length + 1;
                return [...prevUsers, newUser];
            })
        }
        else if(action === "edit")
        {
            setUsers(prevUsers => {
                const id = parseInt(e.target.id.value);  
                const newData = [...prevUsers];
                const userIndex = newData.findIndex(user => user.id === id);
                newData[userIndex] = {...newData[userIndex], ...newUser}

                return newData;
            })

            alert('Edit data berhasil');

            setAction('insert')
            setUserEdit(null)
        }

        setId('')
        setName('')
        setUsername('')
        setPassword('')
        
        e.target.name.focus()
    }

    return (
        <form className="form-pedagang" onSubmit={handleSubmit}>
            <h2>Form</h2> 
            <> 
                <Input 
                    type="hidden" 
                    name="id"
                    value={id}
                    onChange={e => setId(e.target.value)}         
                />
                <Input 
                    label="Nama Pedagang" 
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
