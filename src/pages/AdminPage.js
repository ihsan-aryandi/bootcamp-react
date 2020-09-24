import React, { useState } from 'react'

import './css/AdminPage.css'
import { deleteUser as deleteUserAction } from '../actions/users'
import Card from '../components/Card'
import Form from '../components/FormUser'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminPage({ redirect }) {
    const [action, setAction] = useState('insert')
    const [userEdit, setUserEdit] = useState(null)
    
    const users = useSelector(state => state.UsersReducer)
    const loginStatus = useSelector(state => state.LoginReducer)
    
    const deleteUser = useDispatch()

    if(!loginStatus.isLoggedIn || loginStatus.user.role !== "admin") redirect('/')

    const newUsers = users.filter(value => value.role === "user")
    
    const handleEdit = id => {
        const user = users.find(u => (u.id === id && u.role === "user"))

        setUserEdit(user);
        setAction('edit');
    }

    const handleDelete = id => {
        const conf = window.confirm('Apakah anda yakin ingin menghapus data ini ?');

        if(!conf) return;

        deleteUser(deleteUserAction(id));
    }

    return (
        <>
            <h2>Selamat datang { loginStatus.user.name }</h2>
            <h1 style={{ marginBottom: 50 }}>Data Users</h1>
            <div className="content">
                <Form  
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