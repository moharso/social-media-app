import React from "react";
import Header from "../header/Header";
import "./Main.css";
// import CalendarView from "../calendarView/CalendarView";
import HomePageImage from "../reusableComponents/homepageImage/HomePageImage";
import {Outlet} from "react-router-dom";
const Main = () => {
  return (
    // xl:px-48
    // md:pr-[5.688rem]
    <div className="Main flex w-full min-h-full px-m pb-m md:pl-36 scheduler-wrapper-element">
      {/* mt-36 */}
      <div className="w-4/5 md:w-3/4 flex flex-col flex-1  md:mt-0">
        {/* <NavigationBar /> */}
        {/* <Header /> */}
        <Outlet />
        {/* <CalendarView /> */}
      </div>
      <HomePageImage />
    </div>
  );
};

export default Main;
