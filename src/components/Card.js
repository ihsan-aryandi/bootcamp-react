import React from 'react'

import './css/Card.css'

export default function Card({ name, username, password, isActive, onEdit, onDelete }) {
    
    return (
        <div className="card">
            <h3>{name}</h3>
            <ul>
                <li>Username : {username}</li>
                <li>Password : {password === '' ? '-' : password}</li>
                <li>Status : {isActive ? 'Active' : 'Inactive'}</li>
            </ul>
            <div className="cta">
                <button className="edit" onClick={onEdit}>Edit</button>
                <button className="delete" onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}
