import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  toggle = () => {
    this.setState(() => ({
      toggle: !this.state.toggle
    }));
  };

  inc = () =>{
    if(this.state.toggle){
    this.setState({
        count : this.state.count + 1
    })
    }else { //extra step to show  that how pure component works
    this.setState({
        count : this.state.count
    })
}
}

  render() {
    console.log("this is a simple component");
    return (
      <div>
        <h1>Simple Counter Component</h1>
        <p>Count: {this.state.count}</p>
        <button style={{backgroundColor:this.state.toggle?"green":"red"}} onClick={this.toggle}>Toggle</button>
        <button onClick={this.inc}>Increment</button>
      </div>
    );
  }
}
