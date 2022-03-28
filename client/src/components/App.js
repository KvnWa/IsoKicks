import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import Login from './Login/Login.jsx'
import Cart from './Cart/Cart.jsx'
import Footer from './Footer/Footer.jsx'
import ShoeCard from './ShoeCard/ShoeCard.jsx'
import Product from './Product/Product.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import ProductDetail from './ProductDetail/ProductDetail.jsx'


const App = () => {


  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/shoecard">
          <ShoeCard />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/sneakers/:id">
          <ProductDetail />
        </Route>
      </Router>
      <Footer />
    </>
  )
}

export default App