import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import "../styles/styles.scss";
import Home from "../pages/Home";
import About from "../pages/About";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
