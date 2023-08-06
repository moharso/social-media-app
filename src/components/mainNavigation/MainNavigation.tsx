import {
  HiOutlineCalendarDays,
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import MainNavigationItem from "../mainNavigationItem/MainNavigationItem";

const MainNavigation = () => {
  return (
    <ul className="w-full hidden md:flex items-center flex-col space-y-8 overflow-x-hidden scrollbar py-6">
      <div className="w-full">
        <MainNavigationItem to="/dashboard">
          <HiOutlineSquares2X2 className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300" />
        </MainNavigationItem>
        <MainNavigationItem to="/dashboard">
          <HiOutlineCalendarDays className="text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300 " />
        </MainNavigationItem>
        <MainNavigationItem to="/dashboard">
          <HiOutlineUsers className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300 " />
        </MainNavigationItem>
        <MainNavigationItem to="/dashboard">
          <HiOutlineCog6Tooth className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300 " />
        </MainNavigationItem>
      </div>
    </ul>
  );
};

export default MainNavigation;
