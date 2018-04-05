import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const App = () => (
  <div className="app">
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);


const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

export default App;
