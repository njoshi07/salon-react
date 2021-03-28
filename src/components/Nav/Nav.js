import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
 constructor(props){
     super(props);
     this.state = {
         active : false
     }
 }

   activeMenu = (e) => {
        e.preventDefault();
        console.log("HI");
    }
    render() {      
        return (
            <div className="nav">
                <div className="logo">:)</div>
                <div className="toggle" onClick={this.activeMenu}></div>
                <div className="navigation">
                    <ul className="nav-links">
                        <Link  to="/"><li className="listItems">Home</li></Link>
                        <Link  to="/services"><li className="listItems">Services</li></Link>
                        <Link  to="/careers"><li className="listItems">Careers</li></Link>
                        <Link  to="/contact"><li className="listItems">Contact</li></Link>
                    </ul>
                    {/* <div className="social-bar">
                        <ul>
                        <li><a href="mailto:roop.threading@gmail.com">Email</a></li>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://yelp.com">Yelp</a></li>
                        </ul>
                    </div> */}
              </div>  
            </div>
        )
    }
}

export default Nav
