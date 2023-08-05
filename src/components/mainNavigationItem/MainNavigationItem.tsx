import {NavLink} from "react-router-dom";

const MainNavigationItem = ({children, to, tooltip}: any) => {
  return (
    <li className="w-full flex justify-center mt-10">
      <div className="flex relative">
        <NavLink
          className="rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 hover:text-blue-400 focus:text-blue-400 rounded group ease-in duration-300"
          // title={tooltip}
          to={to}
        >
          {/* <span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-white rounded-lg text-center text-black text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-blue-gray-50">
            Tooltip
          </span> */}

          {children}
        </NavLink>
      </div>
    </li>
  );
};

export default MainNavigationItem;
