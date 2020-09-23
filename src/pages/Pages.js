import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import AdminPage from './AdminPage'
import PedagangPage from './PedagangPage'
import UserPage from './UserPage'

export default function Pages({ user, users, setIsLoggedIn, setUsers, setUserLoggedIn }) {
    return (
        <>
            <Route path="*" children={props => <Navbar setIsLoggedIn={setIsLoggedIn} user={user} setUserLoggedIn={setUserLoggedIn} { ...props }/>} />
            <main className="container">
                <Switch>
                    <Route exact path="/admin" children={props => (
                        <AdminPage {...props} user={user} users={users} setUsers={setUsers} />
                    )}/>
                    <Route exact path="/pedagang" children={props => (
                        <PedagangPage {...props} user={user} users={users} setUsers={setUsers} />
                    )}/>
                    <Route exact path="/user" children={props => (
                        <UserPage {...props} user={user} users={users} setUsers={setUsers} />
                    )}/>
                </Switch>
            </main>
        </>
    )
}
