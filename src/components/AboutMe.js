import React from "react"
import "../style/aboutMe.css"
import img from "../img/TJ.jpg"

const aboutMe = () => {
    return (
        <div className="aboutMe">
            <h1 className="tittle">o mnie</h1>
            <h3>Nazywam się Tomasz Jasik i jestem magistrem fizjoterapii.</h3>
            <p>W 2012 r. ukończyłem Uniwersytet Medyczny w Lublinie, w tym czasie uczęszczałem także na studia podyplomowe z zakresu dietetyki i planowania żywienia. W trakcie swojej praktyki pracowałem w szpitalach, gabinetach, sanatoriach czy ośrodkach rehabilitacyjnych, jednakże największą frajdę sprawiała mi praca ze sportowcami, byli to między innymi:</p>
            <ul>
                <li>Ciarko PBS Bank STS Sanok – ekstraklasa hokeja na lodzie</li>
                <li>TSV Mansard Sanok- 1 liga siatkówki mężczyzn</li>
                <li>UKS Mosir Sanok, short-track</li>
                <li>Esanok.pl Wilki Sanok – ekstraklasa unihokeja</li>
            </ul>
            <p>Z czasem coraz bardziej zacząłem dostrzegać zależność między odżywianiem a stanem naszego zdrowia, a także tym, że odpowiedni model żywienia i suplementacja może wyleczyć wiele dolegliwości. Obecnie prowadzę gabinet w którym próbuję łączyć wiedzę zarówno z rehabilitacji jak i dietetyki co umożliwia mi bardziej holistyczne spojrzenie na człowieka i dostrzeganie wielu powiązań.</p>
            <p className="rehab">Ukończyłem następujące kursy w zakresie rehabilitacji:</p>
            <ul>
                <li>FDM – Leczenie zaburzeń układu mięśniowo- szkieletowego technikami powięziowymi.</li>
                <li>Proprioceptive-Deep Tendon Reflex (P-DTR)</li>
                <li>Lokalne i globalne wzorce zaburzeń kompleksu miednicznego</li>
                <li>Instruktor rekreacji ruchowej, specjalność kulturystyka i sporty siłowe</li>
                <li>Staw kolanowy, badanie i fizjoterapia funkcjonalna</li>
                <li>Kinesiology taping- plastrowanie dynamiczne</li>
                <li>Suche igłowanie DRY Needling</li>
            </ul>
            <p className="diet">W zakresie dietetyki:</p>
            <ul>
                <li>Dietetyka kliniczna</li>
                <li>Dietetyka i motywacja</li>
                <li>Dieta Ajwen – inne podejście</li>
                <li>Dieta tłuszczowa i jej zastosowanie w kulturystyce</li>
                <li>Bezpieczeństwo i jakość żywności</li>
                <li>Profesjonalny doradca suplementacyjny</li>
                <li>Od jelit do mózgu i z powrotem.</li>
            </ul>
            <img src={img} alt="Tomasz Jasik" />

            <h2>Chciałbym żebyś wiedział, że możesz</h2>
            <h1>UWOLNIĆ SIĘ OD BÓLU !</h1>

        </div>
    );
}

export default aboutMe;
