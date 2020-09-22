import React, { useState, useEffect } from 'react'

import './css/AdminPage.css'

import PedagangCard from '../components/Card'
import FormPedagang from '../components/FormPedagang'

export default function AdminPage({ user, users, setUsers }) {
    const [pedagang, setPedagang] = useState([])
    const [action, setAction] = useState('insert')
    const [userEdit, setUserEdit] = useState(null)

    useEffect(() => {
        const filteredUsers = users.filter(value => value.role === "pedagang")
        setPedagang(filteredUsers)
    }, [users])

    const handleEdit = id => {
        const user = users.find(u => (u.id === id && u.role === "pedagang"))

        setUserEdit(user);
        setAction('edit');
    }

    const handleDelete = id => {
        const filteredUsers = users.filter(value => value.id !== parseInt(id))
        setUsers(filteredUsers)
    }

    return (
        <>
            <h2>Selamat datang { user.name }</h2>
            <h1 style={{ marginBottom: 50 }}>Data Pedagang</h1>
            <div className="content">
                <FormPedagang 
                    setUsers={setUsers} 
                    action={action} 
                    setAction={setAction} 
                    userEdit={userEdit}
                    setUserEdit={setUserEdit} 
                />
                <div className="list-pedagang">
                    {pedagang.map(p => 
                        <PedagangCard 
                            key={p.id}
                            name={p.name} 
                            username={p.username} 
                            password={p.password}
                            onEdit={() => handleEdit(p.id)}
                            onDelete={() => handleDelete(p.id)}
                        />
                    )}
                </div> 
            </div>
        </>
    )
}