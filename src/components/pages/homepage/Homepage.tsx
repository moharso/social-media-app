import React from "react";
import Header from "../../header/Header";
import Aside from "../../aside/Aside";
import "./Homepage.css";
import Main from "../../main/Main";
const Homepage = () => {
  return (
    <div className="w-full h-full scrollbar overflow-x-hidden">
      <Aside />
      <Main />
    </div>
  );
};

export default Homepage;
