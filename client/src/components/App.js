import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import Login from './Login/Login.jsx'
import Cart from './Cart/Cart.jsx'


const App = () => {
  return (
    <Router>
    <div>
      <Route exact path="/">
      <Navbar />
      </Route>
      <Route exact path="/cart">
      <Cart />
      </Route>
      <Login />
    </div>
    </Router>
  )
}

export default App