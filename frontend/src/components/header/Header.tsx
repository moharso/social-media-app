import React, {useContext} from "react";
import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import {PostContext} from "../../context/PostContext";
import Button from "../reusableComponents/button/Button";
import {useSearchParams} from "react-router-dom";

const Header = ({view, text, scheduling}: any) => {
  const {userSelected} = useContext(PostContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const media = searchParams.get("social");

  return (
    <div className="pb-5 mb-5 z-10 pt-10 ">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex flex-wrap flex-col  tab-list gap-x-8 gap-y-2">
          <span className="text-3xl font-bold">{view} view</span>
          <span className="text-l font-semibold italic text-center text-slate-900">
            We take the{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
              <span className="relative text-white">stress</span>
            </span>{" "}
            out of {text}
          </span>
        </div>
        {scheduling ? (
          <div className=" md:flex items-center justify-end mt-2 w-full lg:mt-0 lg:w-auto lg:flex-1">
            {userSelected?.length ? (
              <Button text="Schedule a new post" link={`post`}>
                Schedule a new post
                {/* link={`post&social=${media}`} */}
              </Button>
            ) : (
              // <Link to={`post?social=${media}`}>Schedule a new post</Link>
              // <Button
              //   text="Schedule a new post"
              //   link={`?compose=true&social=${media} `}
              // ></Button>

              <Link
                className="flex items-center font-semibold text-sm leading-none max-w-full outline-none shadow-lg justify-center bg-blue-300 text-white p-5 min-h-14 min-w-150 text-sm rounded-md"
                style={{pointerEvents: "none"}}
                to=""
                // onClick={(event: any) => event.preventDefault()}
              >
                <span>Please choose the account!</span>
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
