import React, { useState } from 'react';
import './App.css';

import LoginPage from './pages/LoginPage'
import Pages from './pages/Pages'

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [users] = useState([
    {
        name: "Ihsan Aryandi",
        username: "ihsanaryandi",
        password: "ihsan123",
        role: "admin"
    },
    {
        name: "Sasha Zotova",
        username: "shuzolotova",
        password: "sasha123",
        role: "user"
    },
    {
        name: "Chris Redfield",
        username: "chrisredfield",
        password: "chris123",
        role: "pedagang"
    },
    {
        name: "Jack Krauser",
        username: "jack",
        password: "jack123",
        role: "pedagang"
    }
]);

  return (
    <div className="App">
      { isLogged ? <Pages user={userLoggedIn} users={users} setIsLoggedIn={setIsLoggedIn} /> : <LoginPage setIsLoggedIn={setIsLoggedIn} setUserLoggedIn={setUserLoggedIn} users={users} /> }
    </div>
  );
}

export default App;