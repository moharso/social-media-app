import React from "react";
import Aside from "../../aside/Aside";
import "./Homepage.css";
import Main from "../../main/Main";
import AccountsDisplay from "../../accountsDisplay/AccountsDisplay";

const Homepage = ({onUserSelected, userSelected}: any) => {
  return (
    <div className="w-full h-full scrollbar overflow-x-hidden relative">
      <Aside />
      <Main userSelected={userSelected} />
      <AccountsDisplay onUserSelected={onUserSelected} />
    </div>
  );
};

export default Homepage;
