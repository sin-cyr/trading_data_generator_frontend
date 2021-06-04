import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { NavBar } from "./components/nav-bar/NavBar";
import { Home } from "./components/home/Home";
import AllTradeDisplayContainer from "./containers/AllTradeDisplayContainer"
import CreateTradeContainer from "./containers/CreateTradeContainer";
import SingleTradeContainer from "./containers/SingleTradeContainer";

export const App = () => (
    <div className="App">
      <h2>FDM Data Generation Tool</h2>
      <div className="nav-wrapped indigo lighten-4"></div>
        <Router>
          <NavBar/>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/createtrade" component={CreateTradeContainer} />
              <Route exact path="/alltradedisplay" component={AllTradeDisplayContainer} />
              <Route exact path="/singleTrade/:tradeId" component={SingleTradeContainer} />
            </div>
        </Router>
    </div>
  );
