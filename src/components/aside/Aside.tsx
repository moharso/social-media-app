import React from "react";

// @ts-ignore
import Icon from "../assets/brand.png";
import "./Aside.css";

const Aside = () => {
  return (
    <div className="Aside fixed z-20 rounded-lg top-6 left-6 right-m md:top-m md:right-unset md:bottom-m md:bg-none bg-white/80 dark:bg-icoDarkMode-anthracite/80 ">
      <div className=" h-full AsideContainer">
        <div className="flex align-middle ">
          <a
            href="/"
            className="p-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-icoDarkMode-deepBlack/80 focus:ring-icoBlue-200 rounded inline-block leading-none"
          >
            <img alt="brand icon" src={Icon} className="mr-3"></img>
          </a>
        </div>

        <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 ">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="relative ml-3" data-te-dropdown-ref>
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-full"
                  style={{height: "22px", width: "22px"}}
                  alt="Avatar"
                  loading="lazy"
                />
                <span className="w-2 pl-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="h-5 w-5"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </nav>
        {/* <ul className="w-full md:flex items-center flex-col space-y-8 overflow-x-hidden scrollbar py-6">
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
          </ul> */}
      </div>
    </div>
  );
};

export default Aside;
