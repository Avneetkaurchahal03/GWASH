import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import Home from "./Components/Home/Home";
// import Customer from "./Components/CustomerComp/Customer";

import Admin from "./Member/Admin/Admin";
import Washer from "./Member/Washer/Washer";
import Customer from "./Customer/Customer";
import Appointment from "./Components/Home/Appointment";





function App() {
  return (
    <>
    {/* <Home/> */}
    
    <Router>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  path="/customer_home" component={Customer}/>
          <Route  path="/admin_home" component={Admin}/>
          <Route  path="/washer_home" component={Washer}/>
          <Route path="/appointment" component = {Appointment}/>
        </Switch>
    </Router> 
    
    
    </>
  );
}

export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
