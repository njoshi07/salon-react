import './App.css';
import './assets/main.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Nav  from "./components/Nav/Nav";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";



function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
        <div>
          <Nav />
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/services" exact component={Services}></Route>
              <Route path="/careers" exact component={Career}></Route>
              <Route path="/contact" exact component={Contact}></Route>
          </Switch>        
        </div>
    </Router> 
      </div>
 
    </div>
  );
}

export default App;
