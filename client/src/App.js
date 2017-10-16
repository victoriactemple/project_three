import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import HomePage from './components/home/HomePage'
import UsersPage from './components/login/UsersPage'
import SignUpForm from './components/login/SignUpForm'
import SignInPage from './components/login/SignInPage'
import User from './components/login/User'
import PiesList from './components/pie/PiesList'
import About from './components/home/About'
import EditForm from './components/login/EditForm'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component = {HomePage} />
          <Route exact path = "/users" component = {UsersPage} />
          <Route exact path = "/signup" component = {SignUpForm} />
          <Route exact path ="/signin" component = {SignInPage} />
          <Route exact path="/users/:id" component ={User} />
          <Route exact path ="/pies" component ={PiesList} />
          <Route exact path = "/about" component ={About} />
          <Route exact path = "/users/:id/editform" component= {EditForm} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
