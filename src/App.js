import React from 'react';
import './App.css';
import  Home from './Home/Home';
import  Login from './Authorization/Login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ui>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
        </ui>
      </nav>

      <Route path="/" exact component={Home}/>
      <Route path="/Login" component={Login}/>


    </div>
  );
}

export default App;
