import {HiMiniBars3} from "react-icons/hi2";
import React, {useState} from "react";
import Logo from "../reusableComponents/logo/Logo";
import HiddenButton from "../reusableComponents/hiddenButton/HiddenButton";

const NavigationBar = ({showSideBar, clickBtn}: any) => {
  // const [showSideBar, setShowModal] = useState(false);

  return (
    <nav className="bg-transparent text-zinc-500 flex items-center w-full fixed z-10 px-4 h-16">
      <div className="flex-grow"></div> {/** spacer */}
      <div className="md:hidden">
        <HiddenButton clickBtn={() => clickBtn()} />
      </div>
      {/* <button className="md:hidden" onClick={() => onClick()}>
        <HiMiniBars3 className="h-6 w-6" />
      </button> */}
    </nav>
  );
};

export default NavigationBar;
