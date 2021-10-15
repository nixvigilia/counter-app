import React, { Component } from "react";
// import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // need to pass parameters like props
  constructor() {
    super();
    console.log("App - Constructor");
    // }

    // constructor(props) {
    //   super(props);
    //   console.log("App-Constructor", this.props);
    // }
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    // console.log(counter);
    // ... spread operator
    const counters = [...this.state.counters]; //cloning state counters (array)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    // console.log(this.state.counters[0]);
    // console.log(index);
  };

  handleDelete = (counterId) => {
    // console.log("counter_id", counterId);
    // const counters = this.state.counters.filter(
    //   (counters) => counters.id !== counterId
    // );
    // OR
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    // OR
    this.setState({ counters }); //=== Re-render Component
  };

  handleReset = () => {
    console.log("Reset");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          // ==> can be also say 'where'
          //counters filter them where the value is greater than 0
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
