import React from "react";
import "./Main.css";
import HomePageImage from "../reusableComponents/homepageImage/HomePageImage";
import {Outlet} from "react-router-dom";

const Main = () => {
  return (
    <div className="Main flex w-full min-h-full px-m pb-m md:pl-36 scheduler-wrapper-element">
      <div className="w-4/5 md:w-3/4 flex flex-col flex-1  md:mt-0">
        <Outlet />
      </div>
      <HomePageImage />
    </div>
  );
};

export default Main;
