import React, { Component } from 'react';


export class Contact extends Component {
     state = {
         count : 0
     }

     countIncrease () {
         this.setState({ count: this.state.count + 1})
     }

     countDecrease() {
         this.setState({count: this.state.count - 1})
     }
    render() {
        return (
            <div className="container m-auto">
               <h1>Building Counter</h1> 
               <div className="displayCount">{this.state.count}</div>
               <button className="increase btn btn-blue" onClick={() => this.countIncrease()}> + </button>
               <button className="decrease btn btn-blue" onClick={() => this.countDecrease()}> - </button>
            </div>
        )
    }
}

export default Contact
