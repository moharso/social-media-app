import {HiOutlineArrowRightOnRectangle} from "react-icons/hi2";

const UserAvatar = () => {
  return (
    <div className="relative flex w-full flex-wrap items-center justify-between  py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:py-4 mb-10">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="relative ml-3" data-te-dropdown-ref>
          <a
            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            href="/dashboard"
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
              <HiOutlineArrowRightOnRectangle />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg> */}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
