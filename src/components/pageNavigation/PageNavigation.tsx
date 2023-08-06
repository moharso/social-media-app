import React from "react";
import {NavLink} from "react-router-dom";
const PageNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/">Product</NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNavigation;
