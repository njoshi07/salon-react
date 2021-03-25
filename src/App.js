import './App.css';
import { Router, Route, Switch } from "react-router";
import { Link } from 'react-router-dom';

import Home   from "./components/Home";
import Services from "./components/Services";
import Career from "./components/Career";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
      <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/carees">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/careers">
              <Career />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
        </Switch>
        
      </div>
    </Router> 
      </div>
 
    </div>
  );
}

export default App;
