import React from "react"
import "../style/SliderRecomentadion.css"

const Slider = ({ property }) => {
    const { img, h3Txt, pTxt } = property
    return (
        <div className="frame-recomendation" >
            <img src={img} alt="" />
            <h3>{h3Txt}</h3>
            <q>{pTxt}</q>
        </div>
    );
}

export default Slider;
