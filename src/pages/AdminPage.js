import React, { useState, useEffect } from 'react'

import './css/AdminPage.css'

export default function AdminPage({ user, users }) {
    const [pedagang, setPedagang] = useState([])

    useEffect(() => {
        const filteredUsers = users.filter(value => value.role === "pedagang")
        setPedagang(filteredUsers)
    }, [users])

    return (
        <>
            <h2>Selamat datang { user.name }</h2>
            <h1 style={{ marginBottom: 50 }}>Data Pedagang</h1>
            {pedagang.map(p => (
                <ul style={{ marginBottom: 30 }}>
                    <li>Nama: {p.name}</li>
                    <li>Username: {p.username}</li>
                    <li>Password: {p.password}</li>
                </ul>
            ))}
        </>
    )
}