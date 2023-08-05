import {
  HiOutlineCalendarDays,
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import MainNavigationItem from "../mainNavigationItem/MainNavigationItem";

const MainNavigation = () => {
  return (
    // <div>
    <ul className="w-full hidden md:flex items-center flex-col space-y-8 overflow-x-hidden scrollbar py-6">
      <div className="w-full">
        <MainNavigationItem to="/" tooltip="Dashboard">
          <HiOutlineSquares2X2 className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300" />
        </MainNavigationItem>
        <MainNavigationItem to="/" tooltip="Calendar">
          <HiOutlineCalendarDays className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
        </MainNavigationItem>
        <MainNavigationItem to="/" tooltip="Users">
          <HiOutlineUsers className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
        </MainNavigationItem>
        <MainNavigationItem to="/" tooltip="Settings">
          <HiOutlineCog6Tooth className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
        </MainNavigationItem>
      </div>
    </ul>
    // </div>
  );
};

export default MainNavigation;
