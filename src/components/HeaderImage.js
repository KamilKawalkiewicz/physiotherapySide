import React from 'react';


const HeaderImage = ({ property }) => {

    const { image, txt } = property
    return (
        <div className="frame" >
            <img src={image} alt={txt} />
            <h1>{txt}</h1>
        </div>)
}

export default HeaderImage