import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";

export const NavBar = () => (
  <header className="header">
    <div>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createtrade">Create New Trade</Link>
          </li>
          <li>
            <Link to="/alltradedisplay">Display All Trades</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
