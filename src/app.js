import React from 'react';
import SiteContext from "./context/siteContext";
import LoginContext from './context/loginContext';
import ToDo from './components/todo/todo.js';
import Header from "./components/header";
import Footer from './components/footer';
import SiteStyles from "./components/siteStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import "./css/card.css";
import "./css/styleForm.css"

export default class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <LoginContext>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/todo-app/home'>
                <ToDo />
              </Route>
              <Route exact path='/todo-app/styles'>
                <SiteStyles />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </LoginContext>
      </SiteContext>
    );
  }
}
