import React from "react"
import { NavLink } from "react-router-dom"

const datas = [
    {
        path: "/",
        txt: "Strona Główna",
        exact: true
    },
    {
        path: "/aboutMe",
        txt: "O mnie"
    },
    {
        path: "/articles",
        txt: "Artykuły"
    },
    {
        path: "/contact",
        txt: "Kontakt"
    }
]

const Navigation = props => {
    const Navigation = datas.map(data => (
        <NavLink key={data.txt} onClick={props.click} to={data.path} exact={data.exact ? data.exact : null}>{data.txt}</NavLink>
    ))
    return (
        <nav className="navigation">
            {Navigation}
        </nav>
    );
}

export default Navigation;