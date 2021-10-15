import React, { Component } from "react";

// Stateless Functional Component
// const NavBar = (props) => {
// destructuring Arguments
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{""}
          <span className="badge rounded-pill bg-secondary m-2">
            {/* {props.totalCounters} */}
            {/* destructuring Arguments */}
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// class Navbar extends React.Component {
//   render() {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar
//             <span className="badge rounded-pill bg-secondary m-2">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
