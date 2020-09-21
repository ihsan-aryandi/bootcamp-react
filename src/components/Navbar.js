import React from 'react'

import './css/Navbar.css'

export default function Navbar({ user, setIsLoggedIn }) {
    return (
        <nav>
            <div className="container">
                <h3>E-Commerce ({ user.role.toUpperCase() })</h3>
                <ul>
                    <li><button className="logout" onClick={() => setIsLoggedIn(false)}>Logout</button></li>
                </ul>
            </div>
        </nav>
    )
}
