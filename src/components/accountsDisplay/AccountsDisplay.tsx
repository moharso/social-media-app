import React from "react";
import "./AccountsDisplay.css";

const AccountsDisplay = () => {
  return (
    <div className="AccountsDisplay fixed z-20 top-6 right-6 md:right-m md:top-m md:bottom-m md:flex">
      <div className="flex flex-col space-y-m justify-center navigation-social-profile">
        <div className="flex flex-col space-y-2 items-center">
          <button className="absolute bg-sky-500 w-11.5 h-11.5 left-0 top-0 rounded-full focus:ring-offset-0 focus:ring-2 focus:ring-icoBlue-200 text-transparent overflow-hidden">
            {/* <img></img> */}
            <span className="absolute"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountsDisplay;
