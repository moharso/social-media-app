import {HiMiniBars3} from "react-icons/hi2";
import React, {useState} from "react";

const NavigationBar = ({showSideBar, onClick}: any) => {
  // const [showSideBar, setShowModal] = useState(false);

  return (
    <nav className="bg-white text-zinc-500 flex items-center w-full fixed z-10 px-4 shadow-sm h-16">
      <div className="font-bold text-lg">My Logo</div>
      <div className="flex-grow"></div> {/** spacer */}
      <button className="md:hidden" onClick={() => onClick()}>
        <HiMiniBars3 className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default NavigationBar;
