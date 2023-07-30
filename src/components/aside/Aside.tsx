import React from "react";

// @ts-ignore
import Icon from "../assets/brand.png";
import "./Aside.css";

const Aside = () => {
  return (
    <div className="Aside fixed z-20 rounded-lg top-6 left-6 right-m md:top-m md:right-unset md:bottom-m md:bg-none bg-white/80 dark:bg-icoDarkMode-anthracite/80 ">
      <div className="hidden w-auto flex-col h-full items-center justify-between md:flex navigation-menu">
        <div className="flex align-middle p-5">
          <a
            href="/dashboard"
            className="rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-icoDarkMode-deepBlack/80 focus:ring-icoBlue-200 rounded inline-block leading-none"
          >
            <img
              alt="calandar icon"
              src={Icon}
              className="HeaderImg mr-3"
            ></img>
          </a>
        </div>
        <nav>
          <ul className="w-full md:flex items-center flex-col space-y-8 overflow-x-hidden scrollbar py-6">
            <li className="w-full flex justify-center">
              <a
                href="/dashboard"
                className="rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-icoDarkMode-deepBlack/80 focus:ring-icoBlue-200 rounded group relative leading-none"
              >
                <span>📅</span>
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="/dashboard">
                <span>📝</span>
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Aside;
