import React from "react";
import Header from "../header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main flex w-full min-h-full px-m pb-m md:pl-36 md:pr-[5.688rem] xl:px-48 scheduler-wrapper-element">
      <div className="w-full flex flex-col flex-1 mt-36 md:mt-0">
        <Header />
      </div>
    </div>
  );
};

export default Main;
