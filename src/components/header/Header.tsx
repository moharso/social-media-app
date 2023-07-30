import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="pb-5 mb-5 z-10 pt-10 !pt-0 md:!pt-10 !mb-xxs !pb-4">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex flex-wrap items-center tab-list gap-x-8 gap-y-2">
          <a href="#home" className="flex items-center text-3xl  font-bold">
            <img
              alt="app logo"
              src=""
              className="icon-content mr-3 text-xl text-g-sky-500"
            ></img>
            <span>Calendar view</span>
          </a>
        </div>
        <div className="hidden md:flex items-center justify-end mt-2 w-full lg:mt-0 lg:w-auto lg:flex-1">
          <Link
            className="flex items-center font-semibold text-sm leading-none max-w-full transition duration-100 outline-none hover:bg-sky-500/50 focus:outline-none justify-center bg-sky-500 text-white hover:bg-icoBlue-400 focus:bg-icoBlue-300 focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white p-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed px-8 create-new-add"
            to="/schedule/post"
          >
            {" "}
            <span className="icon-plus mr-3 align-bottom">+</span>
            <span>Schedule a new post</span>
          </Link>
          {/* <button className="flex items-center font-semibold text-sm leading-none max-w-full transition duration-100 outline-none hover:bg-sky-500/50 focus:outline-none justify-center bg-sky-500 text-white hover:bg-icoBlue-400 focus:bg-icoBlue-300 focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white p-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed px-8 create-new-add">
            <span className="icon-plus mr-3 align-bottom">+</span>
            <span>Schedule a new post</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
