import './App.css';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router,  BrowserRouter } from 'react-router-dom';


import Nav  from "./components/Nav/Nav";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";



function App() {
  return (
    <div className="App">
      <div className="container">
      <Router history={BrowserRouter}>
      <div>
        <Nav />
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
