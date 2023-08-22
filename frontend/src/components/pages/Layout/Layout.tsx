import React from "react";
import "./Layout.css";
import {Outlet} from "react-router-dom";
import Homepage from "../homepage/Homepage";

const Layout = (props: any) => {
  return (
    <div className="Layout">
      {/* <div className="flex h-screen relative">
        <Homepage />
      </div> */}

      {/* {props.children} */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
