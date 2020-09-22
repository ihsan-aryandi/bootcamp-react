import React from 'react'

import Navbar from '../components/Navbar'
import AdminPage from './AdminPage'
import PedagangPage from './PedagangPage'
import UserPage from './UserPage'

export default function Pages({ user, users, setIsLoggedIn, setUsers }) {
    let page = null;

    const role = "user"

    switch(role) {
        case "admin" :
            page = <AdminPage user={user} users={users} setUsers={setUsers} />
            break;
        case "pedagang" :
            page = <PedagangPage user={user} />
            break;
        case "user" :
            page = <UserPage user={user} />
            break;
        default : 
            page = null
    }
    
    return (
        <>
            <Navbar setIsLoggedIn={setIsLoggedIn} user={user} />
            <main className="container">
                {page}
            </main>
        </>
    )
}
