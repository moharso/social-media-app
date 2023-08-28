import React from "react";
import NavButton from "../reusableComponents/navigationButton/NavButton";

const TopBar = () => {
  return (
    <div>
      <ul>
        <li>Content</li>
        <li>Settings</li>
        <li>Confirmation</li>
      </ul>
      <NavButton buttonText="close" to="/" variant="contained" />
    </div>
  );
};

export default TopBar;
