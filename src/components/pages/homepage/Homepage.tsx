import React from "react";
import Aside from "../../aside/Aside";
import "./Homepage.css";
import Main from "../../main/Main";
import {useState} from "react";
import AccountsDisplay from "../../accountsDisplay/AccountsDisplay";

const Homepage = ({allEvents, previousEvents}: any) => {
  const [userSelected, setUserSelected] = useState<any>("");

  function handleSelected(account: any) {
    setUserSelected(account);
  }

  return (
    <div className="w-full h-full scrollbar overflow-x-hidden relative">
      <Aside />
      <Main
        allEvents={allEvents}
        previousEvents={previousEvents}
        userSelected={userSelected}
      />
      <AccountsDisplay onUserSelected={handleSelected} />
    </div>
  );
};

export default Homepage;
