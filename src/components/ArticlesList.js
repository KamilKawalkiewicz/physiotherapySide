import React from "react"
import { Link } from "react-router-dom"
import "../style/ArticlesList.css"

const titles = ["BOL BARKU- JAK TO NAPRAWIC", "BÓL ŁOKCIA I DRĘTWIENIE PALCÓW.", "BÓL KRĘGOSŁUPA- CO ROBIĆ?", "CO ZROBIĆ GDY BOLI KOLANO", "BIODRO TRZASKAJĄCE- NAPRAW TO!"]

const ArticlesList = () => {

    const articleList = titles.map(title => (
        <li key={title}><Link to={`/article/${title}`}>{title}</Link></li>))
    return (
        <div className="articleList">
            <h3>Lista Artykułów:</h3>
            <ul>{articleList}</ul>
        </div>);
}

export default ArticlesList;