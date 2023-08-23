import React from "react";
import "./SlideOver.css";
import {HiOutlineTrash} from "react-icons/hi2";
// @ts-ignore
import Facebook from "../assets/facebook.svg";

const SlideOver = () => {
  return (
    <div
      className="relative z-10 ease-out duration-300 "
      // aria-labelledby="slide-over-title"
      // role="dialog"
      // aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-20 flex max-w-full pl-10">
            {/* w-10/12 */}

            {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
            <div className="slide pointer-events-auto relative w-screen">
              {/* max-w-md */}
              {/* <!--
            Close button, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-500"
              From: "opacity-100"
              To: "opacity-0"
          --> */}
              <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4 ">
                <button
                  type="button"
                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-2.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl">
                <div className="flex justify-between px-4 sm:px-6">
                  <div className="flex gap-2 font-semibold text-base items-center">
                    <img src={Facebook} alt=""></img>
                    <span>Account name</span>
                  </div>
                  <div className="flex items-center">
                    <button className="hover:bg-grayscale-100 text-white:hover tw-rounded inline-flex justify-center items-center w-7 h-7 ">
                      <HiOutlineTrash className="h-5 w-5 " />
                    </button>

                    <button className="px-8">Edit post</button>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <div className="flex justify-between">
                    <div className="DesktopVersion">
                      <header className="DesktopVersionHeader">
                        <div className="DesktopVersionHeaderImg"></div>
                        <div>
                          <span className="DesktopVersionHeaderTitle">
                            Account name
                          </span>
                          <div className="DesktopVersionHeaderDate">
                            <span>1.9.2023</span>
                            <span></span>
                          </div>
                        </div>
                      </header>
                      <p></p>
                    </div>
                    <div>MOBILE VERSION</div>
                  </div>
                  {/* flex-basis: 50%; overflow: auto; padding-left: 14px;
                    padding-right: 8px; position: -webkit-sticky; position:
                    sticky; top: 0; */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
