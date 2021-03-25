import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import App from "../App";
import Service from "./Services";
import Contact from "./Contact";
import Career from "./Career";



export class Menu extends Component {
    
    render() {
       
        return (
            <div>
               <div className="logo"></div> 
              <Router>
                  <div>
                      <Route  path="/" component={App} />
                      <Route  path="/services" component={Service} />
                      <Route  path="/Contact" component={Contact} />
                      <Route  path="/Career" component={Career}/>
                  </div>
              </Router>
            </div>
        )
    }
}

export default Menu
