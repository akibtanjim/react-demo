import React, {Component} from "react";
//import logo from "./logo.svg";
import Movies from "./components/movies";
import "./App.css";
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from "./components/navBar";
import MovieForms from './components/movieForms';
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForms}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;