import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Movies from "./components/Movies/Movies";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/register">
          <Registration></Registration>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/movies">
          <Movies></Movies>
        </Route>
        <Route path="/companyInfo">
          <CompanyInfo></CompanyInfo>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
