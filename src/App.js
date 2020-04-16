import React from 'react';
import './App.css';
import Home from "./Home/Home";
import Login from "./Authorization/Login/Login";
import { Route,NavLink } from "react-router-dom";
import Main from "./Main/Main";


function App() {
  return (
    <div className="App">
        <Main/>

      <Route path="/" exact component={Home}/>
      <Route path="/Login" component={Login}/>


    </div>
  );
}

export default App;
