import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {

    const [ sneaker, setSneaker ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://127.0.0.1:3000/sneakers/${id}`)
        .then((r) => r.json())
        .then((sneaker) => setSneaker(sneaker));
    }, [id])

    if(!sneaker) return <h2>Loading sneaker data...</h2>;

    const { brand, title, price, imageone, imagetwo, imagethree } = sneaker;

  return (
    <div className="product-details">
        <img src={imageone}></img>
        <img src={imagetwo}></img>
    </div>
  )
}

export default ProductDetail