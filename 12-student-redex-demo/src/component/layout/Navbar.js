import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">Student Management App</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/students">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/students/about">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/students/contact">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/students/add" className="btn btn-outline-light">
          Add Students
        </Link>
      </nav>
    );
  }
}

export default Navbar;
