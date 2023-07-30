import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
// @ts-ignore
import Calendar from "../assets/calendar.png";

const Header = () => {
  return (
    <div className="pb-5 mb-5 z-10 pt-10 ">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex flex-wrap items-center tab-list gap-x-8 gap-y-2">
          <a href="./schedule" className="HeaderTitle flex items-center">
            <img
              alt="calandar icon"
              src={Calendar}
              className="HeaderImg mr-3"
            ></img>
            <span className="text-3xl font-bold">Calendar view</span>
          </a>
        </div>
        <div className="hidden md:flex items-center justify-end mt-2 w-full lg:mt-0 lg:w-auto lg:flex-1">
          <Link
            className="flex items-center font-semibold text-sm leading-none max-w-full transition duration-100 outline-none hover:bg-sky-400 focus:outline-none justify-center bg-sky-500 text-white focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white p-5 min-h-14 min-w-150 text-sm rounded-md "
            to="/schedule/post"
          >
            {" "}
            <span className="icon-plus mr-3 align-bottom">+</span>
            <span>Schedule a new post</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
