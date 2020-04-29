import React, {Component} from 'react';
import './App.css';
import Login from "./Authorization/Login/Login";
import { Route,NavLink } from "react-router-dom";
import Main from "./Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

        <div className={"App"}>
            <Main/>
            <Route path="/Login" component={Login}/>

        </div>

  );
}

export default App;
