import {
  HiOutlineCalendarDays,
  HiOutlineSquares2X2,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import MainNavigationItem from "../mainNavigationItem/MainNavigationItem";
import HiddenDialog from "../reusableComponents/hiddenDialog/HiddenDialog";

const MobileNavigation = ({clickClose}: any) => {
  return (
    <div className="fixed inset-y-0 left-0 max-w-full flex z-20">
      <div className="w-60 translate-x-0 backdrop-blur-sm">
        <div className="h-full flex flex-col py-1 shadow-2xl bg-white/80  border-white backdrop-blur-sm rounded-tr-lg rounded-br-lg ">
          <HiddenDialog action="Log out" clickClose={clickClose}>
            <div className="rounded focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 rounded group ease-in duration-300 rounded w-full flex items-center space-x-3 mt-0">
              <MainNavigationItem to="/dashboard">
                <span className="text-gray-500 font-bold">Dashboard</span>
                <HiOutlineSquares2X2 className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300" />
              </MainNavigationItem>
            </div>
            <MainNavigationItem to="/dashboard">
              <span className="text-gray-500 font-bold">Calendar</span>
              <HiOutlineCalendarDays className=" icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12 ease-in duration-300" />
            </MainNavigationItem>
            <MainNavigationItem to="/dashboard">
              <span className="text-gray-500 font-bold">Accounts</span>
              <HiOutlineUsers className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
            </MainNavigationItem>

            <MainNavigationItem to="/dashboard">
              <span className="text-gray-500 font-bold">Settings</span>
              <HiOutlineCog6Tooth className="icon-dashboard text-xs align-middle text-icoGray-500 w-12 h-12    ease-in duration-300" />
            </MainNavigationItem>
          </HiddenDialog>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
