import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import Navbar from '../components/Navbar'
import AdminPage from './AdminPage'
import PedagangPage from './PedagangPage'
import UserPage from './UserPage'
import LoginPage from './LoginPage'

export default function Pages() {
    return (
        <>
            <Route path="*" children={props => <Navbar redirect={props.history.push} />} />
            <main className="container">
                <Switch>
                    <Route path="/" exact children={props => ( <LoginPage redirect={props.history.push} /> )} />
                    <Route exact path="/pedagang" children={props => (
                        <PedagangPage redirect={props.history.push} />
                    )}/>
                    <Route exact path="/user" children={props => (
                        <UserPage redirect={props.history.push} />
                    )}/>
                    <Route exact path="/admin" children={props => <AdminPage redirect={props.history.push} />}/>
                </Switch>
            </main>
        </>
    )
}
