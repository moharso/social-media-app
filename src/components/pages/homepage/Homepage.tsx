import React from "react";
import Aside from "../../aside/Aside";
import "./Homepage.css";
import Main from "../../main/Main";
import {useEffect, useState, useContext} from "react";

const Homepage = ({allEvents}: any) => {
  // const x = useContext(PostContext);
  // console.log(x);

  return (
    <div className="w-full h-full scrollbar overflow-x-hidden">
      <Aside />
      <Main allEvents={allEvents} />
    </div>
  );
};

export default Homepage;
