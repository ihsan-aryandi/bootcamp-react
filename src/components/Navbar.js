import React from 'react'

import './css/Navbar.css'

export default function Navbar({ setIsLoggedIn, setUserLoggedIn, history }) {
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserLoggedIn(null);
        history.push('/login')
    }

    return (
        <nav>
            <div className="container">
                <h3>E-Commerce</h3>
                <ul>
                    <li><button className="logout" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
        </nav>
    )
}
