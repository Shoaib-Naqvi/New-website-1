import React, { Component } from 'react';

class LifecycleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Runs after the component is added to the page
  componentDidMount() {
    // You can fetch data or start timers here
    console.log('Component mounted');
  }

  // Runs after every update (like setState)
  componentDidUpdate() {
    console.log('Component updated');
  }

  // Runs just before the component is removed
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{border: '1px solid #db7f28ff', padding: '2rem', margin: '2rem 0'}}>
        <h2>Class Component Lifecycle </h2>
        <p>This is a simple example to show the main lifecycle methods in a class component.</p>
        <p>Count: {this.state.count}</p>
        <button style={{color: '#db7f28ff'}} onClick={this.increment}>Increment</button>
        <ul>
          <li><b>componentDidMount</b>: Runs after component is added</li>
          <li><b>componentDidUpdate</b>: Runs after every update</li>
          <li><b>componentWillUnmount</b>: Runs before component is removed</li>
        </ul>
      </div>
    );
  }
}


export default LifecycleClassComponent;

