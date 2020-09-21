import React from 'react'

import './css/LoginPage.css'
import Input from '../components/Input'

export default function LoginPage({ setIsLoggedIn, setUserLoggedIn, users }) {

    const handleSubmit = e => {
        e.preventDefault();

        const { username, password } = e.target

        const user = users.find(value => {
            const checkUsername = value.username === username.value
            const checkPassword = value.password === password.value

            return (checkUsername && checkPassword)
        })

        if(user !== undefined)
        {
            setIsLoggedIn(true)
            setUserLoggedIn(user)
        }
        else
        {
            alert('Username atau password salah')
        }
        
    }

    return (
        <div className="login">
            <form className="login-card" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input label="Username" type="text" name="username" />
                <Input label="Password" type="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
