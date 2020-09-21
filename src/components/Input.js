import React from 'react'

import './css/Input.css'

export default function Input({ type, name, label }) {
    return (
        <div className="input">
            <label htmlFor={label}>{label}</label>
            <input type={type} name={name} id={label} required />
        </div>
    )
}
