import React from 'react'
import './css/LoginPage.css'
import Input from '../components/Input'
import { connect } from 'react-redux'
import { doLogin } from '../actions/auth'
import handleLogin from '../functions/handleLogin'

const mapStateToProps = state => ({
    isLoggedIn: state.LoginReducer,
    users: state.UsersReducer
})

const mapDispatchToProps = dispatch => ({
    doLogin: user => dispatch(doLogin(user))
})

export default connect(mapStateToProps, mapDispatchToProps)
(function LoginPage({ isLoggedIn, doLogin, users, redirect }) {    
    
    if(isLoggedIn.isLoggedIn)
    {
       redirect(`/${isLoggedIn.user.role}`) 
    }
    
    return (
        <div className="login">
            <form className="login-card" onSubmit={e => handleLogin(e, doLogin, users, redirect)}>
                <h2>Login</h2>
                <Input label="Username" type="text" name="username" />
                <Input label="Password" type="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
})
