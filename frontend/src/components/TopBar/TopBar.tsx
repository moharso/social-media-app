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
      <NavButton buttonText="close" variant="contained" />
      {/* to="/" */}
    </div>
  );
};

export default TopBar;
