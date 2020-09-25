import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from './actions/users'
import './App.css';
import SetUsers from './functions/setUsers';
import Pages from './pages/Pages'

function App() {
  const users = useSelector(state => state.UsersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('storage', () => {
      window.localStorage.removeItem('persist:root')
    })

    return () => {
      window.removeEventListener('storage', () => {
        window.localStorage.removeItem('persist:root')
      })
    }
  }, [])

  SetUsers((users) => dispatch(setUsers(users)), users)
  
  return (
    <div className="App">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;