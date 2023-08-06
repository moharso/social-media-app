import React from "react";
import {
  HiOutlineCalendarDays,
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import MainNavigationItem from "../mainNavigationItem/MainNavigationItem";

const MobileNavigation = () => {
  return (
    <div>
      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-60 translate-x-0 backdrop-blur-sm">
          <div className="h-full flex flex-col py-1 shadow-2xl bg-white/80  border-white backdrop-blur-sm rounded-tr-lg rounded-br-lg ">
            <div className="overflow-x-hidden py-7 scrollbar">
              <div className="w-[236px]">
                <ul className="space-y-5 mt-12">
                  <li className="rounded focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 rounded group ease-in duration-300 rounded w-full flex items-center space-x-3 mt-0">
                    <span>
                      <MainNavigationItem to="/">
                        <HiOutlineSquares2X2 className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300" />
                      </MainNavigationItem>
                    </span>
                    <span>Daschboard</span>
                  </li>
                  <li className="rounded focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 rounded group ease-in duration-300 rounded w-full flex items-center space-x-3  ">
                    <span>
                      <MainNavigationItem to="/">
                        <HiOutlineCalendarDays className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
                      </MainNavigationItem>
                    </span>
                    <span>Calendar</span>
                  </li>
                  <li className="rounded focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 rounded group ease-in duration-300 rounded w-full flex items-center space-x-3  ">
                    <span>
                      <MainNavigationItem to="/">
                        <HiOutlineUsers className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
                      </MainNavigationItem>
                    </span>
                    <span>Accounts</span>
                  </li>
                  <li className="rounded focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 rounded group ease-in duration-300 rounded w-full flex items-center space-x-3  ">
                    <span>
                      <MainNavigationItem to="/">
                        <HiOutlineCog6Tooth className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
                      </MainNavigationItem>
                    </span>
                    <span>Settings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;

//
