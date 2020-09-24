import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doLogout } from '../actions/auth'

import './css/Navbar.css'

export default function Navbar({ redirect }) {
    const dispatch = useDispatch()
    const loginStatus = useSelector(state => state.LoginReducer.isLoggedIn)    
    const handleLogout = () => {
        dispatch(doLogout())
        redirect('/')
    }

    return (
        <nav>
            <div className="container">
                <h3>E-Commerce</h3>
                { 
                    loginStatus 
                        ? <ul>
                              <li><button className="logout" onClick={handleLogout}>Logout</button></li>
                          </ul>
                        : '' 
                }
            </div>
        </nav>
    )
}
