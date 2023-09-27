import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    // all eventhandlers called inside JSX lose binding of 'this' keyword
    // Be aware that binding a function creates a new function. You can either bind it directly in render, which means a new function will be created every time the component renders, or bind it in your constructor, which will only fire once.
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Until arrow functions, every new function defined its own this value. However, the arrow function does not create its own this context, so this has the original meaning from the React component instance.
  handleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });

    // this.setState({ count: 10 });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  // render method is equivalent to function body of function components
  // it should contain as little render logic as possible
  render() {
    const date = new Date("june 25 2023");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
