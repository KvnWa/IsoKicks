import React, { useState, useEffect } from 'react'
import ald from "../images/ald.jpeg"
import './Slider.css'
import axios from 'axios';

const Slider = () => {

    const [sneakers, setSneakers] = useState([])

    const fetchData = async () => {
        try {
          const resp = await axios.get('http://127.0.0.1:3000/sneakers');
          setSneakers(resp.data);
        } catch(err) {
          console.error(err)
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className="slider-container">
            <h1 className="sli-bottom">Top Kicks</h1>
            <div className="slider">
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
                <figure className="sli-c">
                    <img src={ald}>
                    </img>
                </figure>
            </div>
        </div>
    )
}

export default Slider