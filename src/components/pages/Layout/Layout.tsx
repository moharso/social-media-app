import React from "react";
import "./Layout.css";

const Layout = (props: any) => {
  return <div className="Layout">{props.children}</div>;
};

export default Layout;
