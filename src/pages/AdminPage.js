import React, { useState, useEffect } from 'react'

import './css/AdminPage.css'

import Card from '../components/Card'
import Form from '../components/FormUser'

export default function AdminPage({ user, users, setUsers, history }) {
    
    const [newUsers, setNewUsers] = useState([])
    const [action, setAction] = useState('insert')
    const [userEdit, setUserEdit] = useState(null)
    
    useEffect(() => {
        const filteredUsers = users.filter(value => value.role === "user")
        setNewUsers(filteredUsers)
    }, [users])
    
    if(user === null) return history.push('/ogin')
    
    const handleEdit = id => {
        const user = users.find(u => (u.id === id && u.role === "user"))

        setUserEdit(user);
        setAction('edit');
    }

    const handleDelete = id => {
        const conf = window.confirm('Apakah anda yakin ingin menghapus data ini ?');

        if(!conf) return;

        const filteredUsers = users.filter(value => value.id !== parseInt(id))
        setUsers(filteredUsers)
    }

    return (
        <>
            <h2>Selamat datang { user.name }</h2>
            <h1 style={{ marginBottom: 50 }}>Data Users</h1>
            <div className="content">
                <Form 
                    setUsers={setUsers} 
                    action={action} 
                    setAction={setAction} 
                    userEdit={userEdit}
                    setUserEdit={setUserEdit} 
                />
                <div className="list-pedagang">
                    {newUsers.map(p => 
                        <Card 
                            key={p.id}
                            name={p.name} 
                            username={p.username} 
                            password={p.password}
                            isActive={p.isActive}
                            onEdit={() => handleEdit(p.id)}
                            onDelete={() => handleDelete(p.id)}
                        />
                    )}
                </div> 
            </div>
        </>
    )
}