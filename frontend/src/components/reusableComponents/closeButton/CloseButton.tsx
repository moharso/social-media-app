import React from "react";
import {Link, NavLink} from "react-router-dom";

const CloseButton = ({to}: any) => {
  return (
    <Link
      type="button"
      className="relative rounded-md text-gray-500 hover:text-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-500"
      to={to}
    >
      {/* <span className="absolute -inset-2.5"></span> */}
      <span className="sr-only">Close panel</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Link>
  );
};

export default CloseButton;
