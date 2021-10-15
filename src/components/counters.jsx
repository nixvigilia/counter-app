import React, { Component } from "react";
import Counter from "./counter";

// class Counters extends Component {
//   render() {
//     return (
//       <div>
//         {/* when mapping array counters => counter // can also use 'counter' without the 's'  */}
//         <button
//           onClick={this.props.onReset}
//           className="btn btn-primary btn-sm m-2"
//         >
//           Reset
//         </button>
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={this.props.onDelete}
//             onIncrement={this.props.onIncrement}
//             // value={counter.value}
//             // id={counter.id}
//             // below includes all the data ie value, id, selected, etc
//             // OR the Counter data
//             counter={counter}
//           >
//             {/* <h4>Counter #{counter.id}</h4> */}
//           </Counter>
//         ))}
//       </div>
//     );
//   }
// }

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // Ajax call ang get new data from the server
    // }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counters - Rendered");
    // object destructuring
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {/* when mapping array counters => counter // can also use 'counter' without the 's'  */}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            // below includes all the data ie value, id, selected, etc
            // OR the Counter data
            counter={counter}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
