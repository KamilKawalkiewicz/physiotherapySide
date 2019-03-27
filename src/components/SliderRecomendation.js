import React, { Component } from "react"
import Slider from "./Slider"
import "../style/SliderRecomentadion.css"

// img
import img1 from "../img/imgRecomendation/opinion3.png"
import img2 from "../img/imgRecomendation/opinion6.jpg"

const properties =
    [
        {
            img: `${img1}`,
            index: 0,
            h3Txt: "Tomasz Sokołowski ESANOK.L WILKI SANOK – EKSTRAKLASA UNHOKEJA",
            pTxt: "Trzy tygodnie przed meczem wyjazdowym doznałem urazu więzadeł kolana. Skorzystałem z rehabilitacji u Tomka. Zgodnie z zapewnieniami mogłem zagrać w tych ważnych dla naszej drużyny meczach. Polecam serdecznie"
        },
        {
            img: `${img2}`,
            index: 1,
            h3Txt: "Jakub Zmarz TSV MANSARD SANOK – 1 LIGA SIATKÓWKI",
            pTxt: "W grudniu poprosiłem Tomka o rozpisanie indywidualnej diety, by zrzucić kilka kilo, nie tracąc przy tym na wynikach sportowych. Cel został osiągnięty. Polecam współpracę z Tomkiem."
        },
        {
            img: `${img1}`,
            index: 2,
            h3Txt: "Piotr Michalski MISTRZ POLSKI W WIELOBOJU SPTRINTERSKIM, UCZESTNIK OLIMPIADY W PJONGCZANG ",
            pTxt: "Życie sportowca to ciągła walka z kontuzjami i przemęczeniem, warto wtedy zadbać o dobrą odnowę. Polecam gabinet JASIK REHABILITACJA SPORTOWA I DIETETYKA."
        },
        {
            img: `${img2}`,
            index: 3,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "Prześladowały mnie wielokrotne kontuzje stawu skokowego. Za każdym razem obawiałem się, że nie będę mógł grać w następnym meczu. Na szczęście z pomocą przyszła REHABILITACJA SPORTOWA TOMASZ JAKSIK. Polecam!"
        },
        {
            img: `${img1}`,
            index: 4,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "Prześladowały mnie wielokrotne kontuzje stawu skokowego. Za każdym razem obawiałem się, że nie będę mógł grać w następnym meczu. Na szczęście z pomocą przyszła REHABILITACJA SPORTOWA TOMASZ JAKSIK. Polecam!"
        },
        {
            img: `${img2}`,
            index: 5,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "Prześladowały mnie wielokrotne kontuzje stawu skokowego. Za każdym razem obawiałem się, że nie będę mógł grać w następnym meczu. Na szczęście z pomocą przyszła REHABILITACJA SPORTOWA TOMASZ JAKSIK. Polecam!"
        },
        {
            img: `${img2}`,
            index: 6,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "Prześladowały mnie wielokrotne kontuzje stawu skokowego. Za każdym razem obawiałem się, że nie będę mógł grać w następnym meczu. Na szczęście z pomocą przyszła REHABILITACJA SPORTOWA TOMASZ JAKSIK. Polecam!"
        },
        {
            img: `${img1}`,
            index: 7,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "Prześladowały mnie wielokrotne kontuzje stawu skokowego. Za każdym razem obawiałem się, że nie będę mógł grać w następnym meczu. Na szczęście z pomocą przyszła REHABILITACJA SPORTOWA TOMASZ JAKSIK. Polecam!"
        }
    ]


class SliderRecomendation extends Component {

    state = {
        properties: properties,
        property: properties[0]
    }

    componentDidMount() {
        this.nextSlide = setInterval(() => {
            const nextIndex = this.state.property.index + 1
            this.setState({
                property: properties[nextIndex]
            })
            if (this.state.property.index >= this.state.properties.length - 1) {
                this.setState({
                    property: properties[0]
                })
            }
        }, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.nextSlide)
    }

    render() {
        const { properties, property } = this.state
        return (
            <>
                <div className="slider-recomendation">
                    <div className="card-slider-wrapper-recomendation" style={{
                        transform: `translateX(-${property.index * (100 / properties.length)}%)`
                    }}>
                        {properties.map(property => <Slider key={property.index} property={property} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default SliderRecomendation
