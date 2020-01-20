import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./component/navbar";

import landing from "./component/landing";
import Contribute from "./component/contribute";
import Footer from "./component/footer";
import list from "./component/list";
import information from "./component/information";
import about from "./component/about";
import where from "./component/where";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={landing} />
          <Route exact path="/about" component={about} />
          <div className="container">
            <Route exact path="/Contribute" component={Contribute} />
            <Route exact path="/list" component={list} />
            <Route exact path="/information" component={information} />
            <Route exact path="/where" component={where} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
