import React from "react";
import {NavLink} from "react-router-dom";
const PageNavigation = () => {
  return (
    <div>
      <nav>
        {/* <Logo /> */}
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNavigation;
