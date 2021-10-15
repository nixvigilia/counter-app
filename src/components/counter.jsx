import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: 0,
    value: this.props.counter.value,
  };

  // class Counter can be used an object

  //// Solution A | Binding Event Handlers /////
  // constructor() {
  //   super();
  //   // console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   // this -> all value of the class Counter
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }
  /////////////////////

  //// Solution B /////
  // handleIncrement = () => {
  //   console.log("Increment Clicked", this);
  // };

  // handleIncrement = (product) => {
  //   console.log(product);
  //   // console.log("Increment Clicked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // ==> SAME AS onCLICK
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  RenderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("Counter - Rendered");
    // console.log("prop", this.props);
    // let classes = "badge m-2 bg-";
    // classes += this.state.count === 0 ? "warning text-dark" : "primary"; //concatenation

    return (
      <React.Fragment>
        <div>
          {/* {this.props.children} */}
          {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.RenderTags()} */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          {/* <button
            onClick={() => this.handleIncrement({ id: 1 })}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button> */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    // classes += this.state.value === 0 ? "warning text-dark" : "primary";
    classes += this.props.counter.value === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatCount() {
    // const { value } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
