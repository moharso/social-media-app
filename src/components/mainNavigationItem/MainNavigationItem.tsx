import {NavLink} from "react-router-dom";

const MainNavigationItem = ({children, to}: any) => {
  return (
    <li className="w-full flex justify-center items-center">
      <div className="flex relative">
        <NavLink
          className=" flex items-center rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 group ease-in duration-300"
          to={to}
        >
          {children}
        </NavLink>
      </div>
    </li>
  );
};

export default MainNavigationItem;
