import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

function ProductDetail({user}) {

  const [sneaker, setSneaker] = useState(null);
  const [ selectSize, setSelectSize ] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`/sneakers/${id}`)
      .then((r) => r.json())
      .then((sneaker) => setSneaker(sneaker));
  }, [id])

  if (!sneaker) return <h2>Loading sneaker data...</h2>;

  function valueClick(e) {
    const size = (e.target.innerText)
    setSelectSize(size)
  
  }

  const handleAddClick = () => {
    console.log(user)
    fetch('/cart_items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sneaker_id: sneaker.id,
        user_id: user.id,
        size: selectSize
      }),
    }).then((r) => r.json());

   
  };


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
        <h3>${price}</h3>
        <div className="product-variants">
          <span className="text-noerror">Select Size</span>
        </div>
        <div className="swatch-size">
          <div className="swatch-size-item"  onClick={valueClick}>4</div>
          <div className="swatch-size-item" onClick={valueClick}>5</div>
          <div className="swatch-size-item" onClick={valueClick}>6</div>
          <div className="swatch-size-item" onClick={valueClick}>7</div>
          <div className="swatch-size-item" onClick={valueClick}>8</div>
          <div className="swatch-size-item" onClick={valueClick}>9</div>
          <div className="swatch-size-item" onClick={valueClick}>10</div>
          <div className="swatch-size-item" onClick={valueClick}>11</div>
          <div className="swatch-size-item" onClick={valueClick}>12</div>
          <div className="swatch-size-item" onClick={valueClick}>13</div>
          <div className="swatch-size-item" onClick={valueClick}>14</div>
          <div className="swatch-size-item" onClick={valueClick}>15</div>
        </div>
        <div className="btn-container">
          <button className="add" onClick={handleAddClick}>Add To Bag</button>
        </div>
        <h4 className="panel-toggle">Product Details and Sizing</h4>
        <h4 className="panel-toggle-h" style={{display: 'none'}}>rain camo print</h4>
        <h4 className="panel-toggle">Delivery and Returns</h4>
      </div>

    </div>
  )
}

export default ProductDetail