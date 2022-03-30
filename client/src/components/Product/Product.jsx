import { useState, useEffect } from 'react'
import ShoeCard from '../ShoeCard/ShoeCard'
import './Product.css'
import axios from 'axios';

const Product = ({sneakers, handleButtonClick}) => {

  // const [sneakers, setSneakers] = useState([])

  // const fetchData = () => {
  //   fetch('http://127.0.0.1:3000/sneakers')
  //   .then((r) => r.json())
  //   .then((data) => setSneakers(data))
  // };
  

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const resp = await axios.get('/sneakers');
  //     setSneakers(resp.data);
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  

  // const handleButtonClick = () => {
  //   fetchData();
  //   console.log("click")
  // }

  return (
    <div className="shoecontainer">
      {sneakers.map((sneaker) => (
        <ShoeCard
          key={sneaker.id}
          sneaker={sneaker}
          handleButtonClick={handleButtonClick}
          />
      ))}
    </div>
  )
}

export default Product