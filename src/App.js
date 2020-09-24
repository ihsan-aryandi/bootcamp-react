import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import LoginPage from './pages/LoginPage'
import Pages from './pages/Pages'

import useUsers from './functions/useUsers'

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null)
  const [users, setUsers] = useUsers();

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