import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import Login from './Login/Login.jsx'
import Cart from './Cart/Cart.jsx'


const App = () => {
  return (
    <Router>
    <div className="flex w-full content-center justify-center">
      <Route exact path="/">
      <Navbar />
      </Route>
      <Route exact path="/cart">
      <Cart />
      </Route>
      <Login />
    <h1 className="text-3xl font-bold underline">
      Hello world! this is a test
    </h1>
    </div>
    </Router>
  )
}

export default App