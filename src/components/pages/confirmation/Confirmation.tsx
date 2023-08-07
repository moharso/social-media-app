import React from "react";
import NavButton from "../../reusableComponents/NavButton";
import myUsersList from "../../data/data";
import ConfirmationDate from "../../confirmationDate/confirmationDate";

const Confirmation = ({onClickReturn}: any) => {
  const userName = myUsersList[0].userName;

  return (
    <div>
      <div>
        <h2>Your post is scheduled</h2>
        <label>{userName}</label>
        <ConfirmationDate></ConfirmationDate>
      </div>
      <NavButton
        buttonText="Schedule a new post"
        to="/post"
        onClick={onClickReturn}
      ></NavButton>
      <NavButton
        buttonText="Back to calendar"
        to="/dashboard"
        onClick={onClickReturn}
      ></NavButton>
    </div>
  );
};

export default Confirmation;
