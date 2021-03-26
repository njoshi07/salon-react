import './App.css';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router,  BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home   from "./components/Home";
import Services from "./components/Services";
import Career from "./components/Career";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <div className="container">
      <Router history={BrowserRouter}>
      <div>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/services"><li>Services</li></Link>
          <Link to="/careers"><li>Careers</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>

        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/careers" component={Career}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Switch>
        
      </div>
    </Router> 
      </div>
 
    </div>
  );
}

export default App;
