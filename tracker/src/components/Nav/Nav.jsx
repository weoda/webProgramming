import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          MADKING'sTracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Жагсаалт
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Нэмэх
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Хэрэглэгч үүсгэх
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
