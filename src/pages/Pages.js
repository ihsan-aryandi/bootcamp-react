import React from 'react'

import Navbar from '../components/Navbar'
import AdminPage from './AdminPage'
import PedagangPage from './PedagangPage'
import UserPage from './UserPage'

export default function Pages({ user, users, setIsLoggedIn }) {
    let page = null;

    switch(user.role) {
        case "admin" :
            page = <AdminPage user={user} users={users} />
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
