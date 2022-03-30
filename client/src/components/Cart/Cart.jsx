import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Cart = () => {

  const [ sneakers, setSneakers ] = useState(null)


  const fetchData = async () => {
    try {
      const resp = await axios.get('/sneakers');
      setSneakers(resp.data);
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>Cart</div>
  )
}

export default Cart