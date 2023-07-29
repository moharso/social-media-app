import React from "react";
// @ts-ignore
import Logo from "../assets/calendar.svg";
import "./Aside.css";

const Aside = () => {
  return (
    <div className="Aside fixed z-20 rounded-lg top-12 left-m right-m md:top-m md:right-unset md:bottom-m backdrop-blur-sm md:backdrop-filter-none md:bg-none bg-white/80 dark:bg-icoDarkMode-anthracite/80 firefox:bg-gradient-to-tr firefox:from-icoGrayFirefox-300 firefox:to-icoWhiteFirefox dark:firefox:from-icoDarkMode-deepBlack dark:firefox:to-icoDarkMode-anthracite">
      <div className="hidden w-auto flex-col h-full items-center justify-between md:flex navigation-menu">
        <div className="flex align-middle p-5">
          <a
            href="/dashboard"
            className="rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-icoDarkMode-deepBlack/80 focus:ring-icoBlue-200 rounded inline-block leading-none"
          >
            Webpage Image{/* <img src={Logo} alt="logo"></img> */}
          </a>
        </div>
        <nav>
          <ul className="w-full hidden md:flex items-center flex-col space-y-8 overflow-x-hidden scrollbar py-6">
            <li className="w-full flex justify-center">
              <a
                href="/dashboard"
                className="rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-icoDarkMode-deepBlack/80 focus:ring-icoBlue-200 rounded group relative leading-none"
              >
                <span>🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/dashboard">
                <span>📝</span>
                <span>Publish</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Aside;
