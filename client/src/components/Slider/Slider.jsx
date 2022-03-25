import React from 'react'
import ald from "../images/ald.jpeg"
import './Slider.css'

const Slider = () => {
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