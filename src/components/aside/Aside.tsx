import "./Aside.css";
import MainNavigation from "../mainNavigation/MainNavigation";
import Logo from "../logo/Logo";
import {HiMiniBars3} from "react-icons/hi2";
import React, {useState} from "react";

const Aside = ({showSideBar}: any) => {
  const [open, setIsOpen] = useState(false);

  return (
    <div
      className={`Aside fixed z-20 rounded-lg top-6 left-6 right-m md:top-m md:right-unset md:bottom-m md:bg-none bg-white/80 h-full transition-transform .3s ease-in-out md:translate-x-0 ${
        !showSideBar ? "-translate-x-full" : ""
      }`}
    >
      <div
        className={`hidden w-auto flex-col h-screen items-center justify-between md:flex navigation-menu AsideContainer 
        }`}
      >
        <Logo />
        <MainNavigation />

        <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 ">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="relative ml-3" data-te-dropdown-ref>
              <a
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-full"
                  style={{height: "40px", width: "40px"}}
                  alt="Avatar"
                  loading="lazy"
                />
                <span className="w-2 pl-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="h-5 w-5"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-60 translate-x-0 backdrop-blur-sm">
          <div className="h-full flex flex-col py-1 shadow-icoXL bg-white/80 dark:bg-icoDarkMode-deepBlack/80 border border-white dark:border-icoDarkMode-deepBlack backdrop-blur-sm rounded-tr-lg rounded-br-lg ">
            <div className="overflow-x-hidden py-7 scrollbar">
              <div className="w-[236px]">
                <div className="space-y-5 mt-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex w-full px-m py-2.5 items-center justify-between h-13 md:hidden">
        <div className="flex align-middle space-x-m">
          <div className="relative flex align-middle">
            <button>
              <HiMiniBars3 />
            </button>
            
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Aside;

// import React from "react";
// import classNames from "classnames";
// type Props = {
//   open: boolean;
//   setOpen(open: boolean): void;
// };
// const Sidebar = ({ open, setOpen }: Props) => {
//   return (
//     <div
//       className={classNames({
//         "flex flex-col justify-between": true, // layout
//         "bg-indigo-700 text-zinc-50": true, // colors
//         "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
//         "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
//         "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
//         "-translate-x-full ": !open, //hide sidebar to the left when closed
//       })}
//     >
//       <nav className="md:sticky top-0 md:top-16">
//         {/* nav items */}
//         <ul className="py-2 flex flex-col gap-2">
//           <li>links here</li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
// export default Sidebar;
