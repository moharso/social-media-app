import {HiMiniSquare3Stack3D} from "react-icons/hi2";

const Logo = () => {
  return (
    <div>
      <div className="flex align-middle p-5">
        <a
          href="/dashboard"
          className=" rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-icoBlue-200 rounded inline-block leading-none"
        >
          <HiMiniSquare3Stack3D className="w-12 h-12 hover:rotate-360 text-blue-400" />
        </a>
      </div>
    </div>
  );
};

export default Logo;
