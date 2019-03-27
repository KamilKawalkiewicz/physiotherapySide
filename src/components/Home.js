import React from "react"
import "../style/Home.css"
import Toggle from "../components/Toggle"
import SliderRecomendation from "./SliderRecomendation"

const whatTake = [
    {
        h3Txt: "Znajdę źródło problemu"
    },
    {
        pTxt: "Aby wykonać skuteczną i trwałą terapię należy znaleźć źródło problemu. Nie wystarczy wykonać zabiegu w miejscu które boli, trzeba dowiedzieć się dlaczego powstał ból aby terapia była trwała a ból już nigdy nie powrócił."
    },
    {
        h3Txt: "Metody dopasowane do Ciebie"
    },
    {
        pTxt: "Różne problemy zdrowotne wymagają różnych interwencji. Nie każdy problem da się rozwiązać masażem i czasem trzeba użyć innych technik jak na przykład terapia manualna, suche igłowa nie, terapia powięziowa."
    },
    {
        h3Txt: "Wiele dyscyplin"
    },
    {
        pTxt: "Wiedza z zakresu rehabilitacji uzupełniona jest wiadomościami z zakresu dietetyki a także treningu sportowego."
    }
]
const dataWhyWorth = [
    {
        h3Txt: "Doświadczenie",
        pTxt: "Pracowałem w różnych dyscyplinach sportowych."
    },
    {
        h3Txt: "Wiedza",
        pTxt: "Ciągłe uzupełnianie wiedzy i szkolenia"
    },
    {
        h3Txt: "Praktyka",
        pTxt: "Sam uprawiam sport"
    }
]

const Home = () => {
    return (
        <>
            <div className="panel-group">
                <Toggle title="Dlaczego warto?">
                    {dataWhyWorth.map((txt, id) => (
                        <div key={id} >
                            <h3>{txt.h3Txt}</h3>
                            <p>{txt.pTxt}</p>
                        </div>
                    ))}
                </Toggle>
                <h3 className="lastH3">Łączę wiele dyscyplin</h3>
                <p className="lastP">Rehabilitacja zaprogramowanie treningu oraz dobranie odpowiedniej suplementacji</p>
            </div>

            <SliderRecomendation />

            <div className="panel-group">
                <Toggle title="CO OTRZYMUJESZ?">
                    {whatTake.map((txt, id) => (
                        <div key={id}>
                            <h3>{txt.h3Txt}</h3>
                            <p>{txt.pTxt}</p>
                        </div>
                    ))}
                </Toggle>
                <h3 className="lastH3" >Dokładna diagnostyka</h3>
                <p className="lastP" >W trakcie pierwszego badania przeprowadzę dokładny wywiad, prześledzę historię choroby oraz dotychczasowe leczenie. Porozmawiamy o przebytych urazach, bo to one często są źródłem problemu. Zanim przejdę do terapii wykonam testy mięśniowe, sprawdzę czy więzadła nie są uszkodzone, zbadam zakres ruchu.</p>
            </div>

        </>
    );
}

export default Home
