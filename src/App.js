import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"

import '../src/style/App.css';
import "./style/Navigation.css"
// layout
import Header from "./layouts/Header"
import Navigation from "./layouts/Navigation"
import Page from "./layouts/Page"
import Footer from "./layouts/Footer"

class App extends Component {
  state = {
    navAcces: false,
    burgerAcive: false
  }

  closeMenu = () => {
    this.setState({
      navAcces: !this.state.navAcces,
      burgerAcive: !this.state.burgerAcive
    })
  }

  render() {
    // nav
    const navAcess = ["navAccesOff"]
    if (this.state.navAcces) { navAcess.push("navAccesOnn") }

    // burger movement
    const burgerAcive = ["burger"]
    if (this.state.burgerAcive) { burgerAcive.push("active") }

    return (
      < BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <header>
            <Header />
          </header>
          <main>
            <div className={burgerAcive.join(" ")} onClick={this.closeMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={navAcess.join(" ")}>
              <Navigation click={this.closeMenu} />
            </div>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
