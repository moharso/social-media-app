import {HiOutlineArrowRightOnRectangle} from "react-icons/hi2";

const UserAvatar = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    window.location.href = "/app"
  }

  return (
    <div className="relative flex w-full flex-wrap items-center justify-between  py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:py-4 mb-10">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="relative ml-3" data-te-dropdown-ref>
          <a
            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            href="/"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <span className="w-2 pl-1">
              <p>Log out</p>
              <HiOutlineArrowRightOnRectangle onClick={handleLogout} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
