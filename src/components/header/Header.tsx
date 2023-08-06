import React, {useMemo, useContext} from "react";
import "./Header.css";
import {Link} from "react-router-dom";
// @ts-ignore
import Calendar from "../assets/calendar.png";
import {PostContext} from "../../App";

const Header = () => {
  const {userSelected} = useContext(PostContext);

  return (
    <div className="pb-5 mb-5 z-10 pt-10 ">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex flex-wrap items-center tab-list gap-x-8 gap-y-2">
          <a href="./" className="HeaderTitle flex items-center">
            <img
              alt="calandar icon"
              src={Calendar}
              className="HeaderImg mr-3"
            ></img>
            <span className="text-3xl font-bold">Calendar view</span>
          </a>
        </div>
        <div className=" md:flex items-center justify-end mt-2 w-full lg:mt-0 lg:w-auto lg:flex-1">
          {userSelected ? (
            <Link
              className="flex items-center font-semibold text-sm leading-none max-w-full transition duration-100 outline-none bg-sky-500 dark:md:hover:bg-fuchsia-600 hover:bg-sky-700 focus:outline-none shadow-lg justify-center  text-white focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white p-5 min-h-14 min-w-150 text-sm rounded-md "
              to="/post"
            >
              <span className="icon-plus mr-3 align-bottom">+</span>

              <span>Schedule a new post</span>
            </Link>
          ) : (
            <Link
              className="flex items-center font-semibold text-sm leading-none max-w-full outline-none shadow-lg justify-center bg-blue-300 text-white p-5 min-h-14 min-w-150 text-sm rounded-md"
              style={{pointerEvents: "none"}}
              to="/post"
              onClick={(event) => event.preventDefault()}
            >
              <span>Please choose the account!</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
