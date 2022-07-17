import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper  blue darken-2">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div></nav>
)

export default Navbar;