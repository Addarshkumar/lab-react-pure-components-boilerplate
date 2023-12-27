import React, { PureComponent } from 'react';

export default class PureCounterComponent extends PureComponent {
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

  inc = () => {
    if (this.state.toggle) {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
    }
  };

  render() {
    console.log("this is a pure component");
    return (
      <div>
        <h1>Pure Counter Component</h1>
        <p>Count: {this.state.count}</p>
        <button style={{backgroundColor:this.state.toggle?"green":"red"}} onClick={this.toggle}>Toggle</button>
        <button onClick={this.inc}>Increment</button>
      </div>
    );
  }
}
