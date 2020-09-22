import React, { useState } from 'react';
import './App.css';

import LoginPage from './pages/LoginPage'
import Pages from './pages/Pages'

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [users, setUsers] = useState([
    {
        id: 1,
        name: "Ihsan Aryandi",
        username: "admin",
        password: "admin",
        role: "admin"
    },
    {
        id: 2,
        name: "Sasha Zotova",
        username: "user",
        password: "user",
        role: "user"
    },
    {
        id: 3,
        name: "Chris Redfield",
        username: "chrisredfield",
        password: "chris123",
        role: "pedagang"
    },
    {
        id: 4,
        name: "Jack Krauser",
        username: "jack",
        password: "jack123",
        role: "pedagang"
    }
]);

  return (
    <div className="App">
      { isLogged ? <Pages user={userLoggedIn} users={users} setIsLoggedIn={setIsLoggedIn} setUsers={setUsers} /> : <LoginPage setIsLoggedIn={setIsLoggedIn} setUserLoggedIn={setUserLoggedIn} users={users} /> }
    </div>
  );
}

export default App;