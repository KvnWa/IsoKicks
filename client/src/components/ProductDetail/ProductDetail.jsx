import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

function ProductDetail() {

  const [sneaker, setSneaker] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://127.0.0.1:3000/sneakers/${id}`)
      .then((r) => r.json())
      .then((sneaker) => setSneaker(sneaker));
  }, [id])

  if (!sneaker) return <h2>Loading sneaker data...</h2>;

  const { brand, title, price, imageone, imagetwo, imagethree } = sneaker;

  return (
    <div className="product-details">
      <div className="img-container">
        <div className="big-product">
          <img src={imageone} style={{ width: 1065 }}></img>
        </div>
        <div className="small-product">
          <img src={imagetwo} style={{ width: 525 }}></img>
          <img src={imagethree} style={{ width: 525 }}></img>
        </div>
      </div>
      <div className="product-desc">
        <h1>{title}</h1>
        <h3>$ {price}</h3>
        <div className="product-variants">
          <span class="text-noerror">Select Size</span>
        </div>
        <div className="swatch-size">
          <div className="swatch-size-item">4</div>
          <div className="swatch-size-item">5</div>
          <div className="swatch-size-item">6</div>
          <div className="swatch-size-item">7</div>
          <div className="swatch-size-item">8</div>
          <div className="swatch-size-item">9</div>
          <div className="swatch-size-item">10</div>
          <div className="swatch-size-item">11</div>
          <div className="swatch-size-item">12</div>
          <div className="swatch-size-item">13</div>
          <div className="swatch-size-item">14</div>
          <div className="swatch-size-item">15</div>
        </div>
        <div className="btn-container">
          <button className="add">Add To Bag</button>
        </div>
      </div>

    </div>
  )
}

export default ProductDetail