import React from 'react';
import SiteContext from "./context/siteContext";
import ToDo from './components/todo/todo.js';
import Header from "./components/header";
import SiteStyles from "./components/siteStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import "./css/card.css";
import "./css/styleForm.css"

export default class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <ToDo />
            </Route>
            <Route exact path='/styles'>
              <SiteStyles />
            </Route>
          </Switch>
        </Router>
      </SiteContext>
    );
  }
}
