import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {

     state = { 
           active : false
         }


   activeMenu = () => {
        this.setState(state => ({active: !state.active}))
        console.log("HI");
    }
    
    render() { 
        const { active } = this.state;    
        return (
            <div className="nav">
                <div className="logo">:)</div>
                <div className="toggle" onClick={this.activeMenu}></div>
                <div className="navigation">                 
                    <ul className={`nav-links ${active ? "nav-active" : ""}`}>                 
                       <li className="listItems"><Link  onClick={this.activeMenu}  to="/">Home</Link></li>                  
                       <li className="listItems"><Link  onClick={this.activeMenu} to="/services">Services</Link></li>   
                       <li className="listItems"><Link  onClick={this.activeMenu} to="/careers">Careers</Link></li>              
                       <li className="listItems"><Link  onClick={this.activeMenu} to="/contact">Contact</Link></li>
                    </ul>        
                </div>  
            </div> 
        )
    }
}

export default Nav
