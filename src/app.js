import React from 'react';
import SiteContext from "./context/siteContext";
import ToDo from './components/todo/todo.js';
import Header from "./components/header"
import "./css/app.css";
import "./css/card.css";

export default class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <Header />
        <ToDo />
      </SiteContext>
    );
  }
}
