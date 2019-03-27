import React, { Component } from "react"
import SliderHeader from "react-slick"
import HeaderImage from "../components/HeaderImage"
import "../style/Header.css"

// img
import header1 from "../img/imgHeader/header1.png"
import pain from "../img/imgHeader/pain_640.jpg"
import pain2 from "../img/imgHeader/pain2_640.jpg"
import sunblock from "../img/imgHeader/sunblock_640.jpg"

const properties =
    [
        {
            image: `${header1}`,
            index: 0,
            txt: ""
        },
        {
            image: `${pain}`,
            index: 1,
            txt: "Dolegliwościom powiedź  nie!"
        },
        {
            image: `${pain2}`,
            index: 2,
            txt: "Uwolnij się od bólu!"
        },
        {
            image: `${sunblock}`,
            index: 3,
            txt: "Z pasja i oddaniem!"
        }
    ]
class Header extends Component {
    render() {
        const settings = {
            speed: 500,
            slideToShow: 1,
            slideToScroll: 1,
            dots: true,
            infinite: true,
            // fade: true,
            autoplay: true,
            autoPlaySpeed: 500,
            pauseOnHover: true
        }
        return (
            <>
                <SliderHeader {...settings}>
                    {properties.map(property =>
                        <HeaderImage key={property.index} property={property} />
                    )}
                </SliderHeader>
            </>
        )
    }
}

export default Header;