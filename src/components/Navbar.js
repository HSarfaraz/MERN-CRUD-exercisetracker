import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    // return (
    //   <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    //       <Link className="navbar-brand" to="/">ExerciseTracker</Link>

    //       {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button> */}

    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav">
    //           <li className="nav-item active">
    //             <Link className="nav-link" to="/">Exercises <span className="sr-only">(current)</span></Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/create">Create Exercise</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/user">Create User</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    // )

    return (
      <nav className="navbar navbar-primary bg-primary navbar-expand-lg px-4">
        <Link to="/" className="navbar-brand">ExerciseTracker</Link>
        <div className="collapse navbar-collapse pull-right">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
      );
  }
}
