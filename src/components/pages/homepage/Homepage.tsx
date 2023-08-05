import React from "react";
import Aside from "../../aside/Aside";
import "./Homepage.css";
import Main from "../../main/Main";
import AccountsDisplay from "../../accountsDisplay/AccountsDisplay";
import NavigationBar from "../../navigationBar/NavigationBar";
import {useState} from "react";

const Homepage = () => {
  const [showSideBar, setshowSideBar] = useState(false);

  function handleClick() {
    setshowSideBar((showSideBar: any) => (showSideBar = !showSideBar));
  
  }
  return (
    <div className="w-full h-full scrollbar overflow-x-hidden relative">
      <NavigationBar onClick={handleClick} />
      <Aside showSideBar={showSideBar} />
      <Main />
      <AccountsDisplay />
    </div>
  );
};

export default Homepage;
