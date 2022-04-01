import { useState, useEffect } from 'react'
import ShoeCard from '../ShoeCard/ShoeCard'
import './Product.css'
import axios from 'axios';
import filter from "../images/filter.svg"

const Product = ({ sneakers, handleButtonClick }) => {

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
    <div className="product-page-c">
      <div className="grey-bar">
        <ul className="grey-items">
          <li>JORDAN</li>
          <li>NIKE</li>
          <li>YEEZY</li>
          <li>ADIDAS</li>
          <li>WOMEN</li>
          <li>APPAREL</li>
          <li>ALL BRANDS</li>
          <li>SHOP BY</li>
        </ul>
      </div>
      <div className="product-top">
        <div className="ptop">

          <img src="https://www.stadiumgoods.com/BWStaticContent/54000/cf6d5eef-3fbf-47c2-a1d6-91c899c4128b_220310-headers-springsale.jpg" alt="a"></img>
          <div className="journal1">
            <h5 className="red-text">SHOP</h5>
            <h4>Iso Kicks</h4>
            <p className="cat-desc1">Find all your favorites at Iso Kicks. Shop the latest and greatest releases from Nike, Jordan, adidas, and much more.</p>
            <a className="red-text-1">Read More</a>
          </div>
        </div>
      </div>
      <div className="pbody">
        <div className="phead">
          <img src={filter} className="p4" />
          <div className="p1">Filter</div>
          <div className="p2">Results</div>
          <div>
            <div className="p3">Sort By</div>
            <select name="cars" className="select-m">
              <option value="best">Best Sellers</option>
              <option value="least">Least Expensive</option>
              <option value="most">Most Expensive</option>

            </select>
          </div>
        </div>
        <div className="body-cont">
          <div className="left-body">
            <h4>Adidas Shoes</h4>
            <h4>Jordan Shoes</h4>
            <h4>Nike Shoes</h4>
            <h4>Other Shoes</h4>
            <h4>Streewear</h4>
            <h4>Yeezy Shoes</h4>
            <h4></h4>
          </div>
          <div className="shoeco">
            <div className="shoecontainer">
              {sneakers.map((sneaker) => (
                <ShoeCard
                  key={sneaker.id}
                  sneaker={sneaker}
                  handleButtonClick={handleButtonClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product