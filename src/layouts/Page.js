import React from "react"
import { Route, Switch } from "react-router-dom"

// components
import Home from "../components/Home"
import aboutMe from "../components/AboutMe"
import ArticlesList from "../components/ArticlesList"
import Articles from "../components/Articles"
import Contact from "../components/Contact"
const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/articles" component={ArticlesList} />
                <Route path="/article/:id" component={Articles} />
                <Route path="/aboutMe" component={aboutMe} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
        </div>);
}

export default Page;