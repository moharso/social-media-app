import React from "react";

const NavigationItem = ({text, children}: any) => {
  return (
    <a href="/" className="text-lg font-semibold leading-6 text-gray-900">
      {text}
      {children}
    </a>
  );
};

export default NavigationItem;
