import React from "react";
import {Link} from "react-scroll";
import "./NavigationItem.css";


const NavigationItem = ({text, children, to}: any) => {
  return (
    <Link
      activeClass="active"
      smooth
      spy={true}
      className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer hover:text-blue-400 ease-in duration-300"
      to={to}
    >
      {text}
      {children}
    </Link>
  );
};

export default NavigationItem;
