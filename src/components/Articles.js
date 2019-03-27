import React from 'react';
import Article from "../components/Article"
import { Link } from "react-router-dom"

const Articles = props => {
    // console.log(props.match)
    // console.log(props.match.params.id)
    return (
        <div >
            <Article id={props.match.params.id} />
            <Link className="return" to="/articles"><i className="fas fa-arrow-circle-left"></i>Spis Artykułów</Link>
        </div>
    );
}

export default Articles;