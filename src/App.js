import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import LoginPage from './pages/LoginPage'
import Pages from './pages/Pages'

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getFromLocalStorage = async () => {
      if(localStorage.getItem("users") === null)
      {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        let dataWithRole = data.map(user => {
          if(user.role === undefined)
          {
            user.role = "user"
            user.password = ''
            user.isActive = false
          }

          return user;
        })

        dataWithRole = [...dataWithRole, {
            id: "1A",
            name: "Ihsan Aryandi",
            username: "admin",
            password: "admin",
            role: "admin"
        }];

        localStorage.setItem('users', JSON.stringify(dataWithRole))
        setUsers(prevUsers => [...prevUsers, ...dataWithRole])
      }
      else
      {
        const data = JSON.parse(localStorage.getItem('users'))
        setUsers(prevUsers => [...prevUsers, ...data]);
      }
    }
    getFromLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <div className="App">
      <Router>
        { isLogged 
          ? <Pages 
              user={userLoggedIn} 
              users={users} 
              setIsLoggedIn={setIsLoggedIn} 
              setUsers={setUsers} 
              setUserLoggedIn={setUserLoggedIn} 
            /> 
          : <Route path="/login" 
              children={props => (
              <LoginPage 
                setIsLoggedIn={setIsLoggedIn} 
                user LoggedIn={userLoggedIn} 
                setUserLoggedIn={setUserLoggedIn} 
                users={users} 
                redirect={props.history.push} 
              />
          )} /> 
        }
      </Router>
    </div>
  );
}

export default App;