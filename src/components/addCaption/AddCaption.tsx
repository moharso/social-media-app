import "./AddCaption.css";
import {NavLink} from "react-router-dom";
import React, {useMemo, useState} from "react";

const AddCaption = () => {
  const [newEvent, setNewEvent] = useState<any>({
    title: "",
    start: "",
    end: "",
  });

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 pt-10 pr-40 pl-20 pb-15 basis-auto bg-white dark:bg-icoDarkMode-anthracite">
        <div className="flex h-full flex-col w-full justify-between">
          <div className="flex flex-col space-y-8 ">
            <div className="flex flex-col">
              <label className="w-full block text-base font-bold mb-3 cursor-pointer w-auto">
                Add a caption
              </label>
              <div className="flex flex-col relative px-8 pt-8 pb-5 space-y-4 AddCaption">
                <div className="flex items-start">
                  <span className="relative inline-flex items-center justify-center bg-white mr-5 w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                    📝
                  </span>
                  <input
                    type="text"
                    placeholder="Say something ..."
                    className="resize-none text-sm z-1 scrollbar placeholder:text-icoGray-400 placeholder:dark:text-icoDarkMode-wolf font-GMedium bg-transparent p-0 border-0 placeholder:text-sm focus:outline-0 focus:ring-0 peer flex-1 leading-5"
                    onChange={(e) =>
                      setNewEvent({...newEvent, title: e.target.value})
                    }
                  ></input>
                </div>
                <div className="flex items-center z-1">
                  <p className="text-xs font-GMedium flex-1 text-icoGray-500 dark:text-icoDarkMode-wolf">
                    <span className="font-GSemiBold">150</span> characters left
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="relative inline-flex items-center justify-center bg-white mr-5 w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                  🌎
                </span>
                <textarea
                  placeholder="Add location"
                  className="resize-none text-sm z-1 scrollbar placeholder:text-icoGray-400 placeholder:dark:text-icoDarkMode-wolf font-GMedium bg-transparent p-0 border-0 placeholder:text-sm focus:outline-0 focus:ring-0 peer flex-1 leading-5"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8 space-x-3 !justify-end">
            <NavLink
              to="/schedule"
              className="flex items-center font-Bold leading-none max-w-full transition duration-100 outline-none bg-sky-300 focus:outline-none justify-center bg-icoBlue text-white hover:bg-sky-400 focus:bg-icoBlue-300 focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white px-10 py-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed"
            >
              ◀ Previous: Calendar
            </NavLink>
            <button className="flex items-center font-Bold leading-none max-w-full transition duration-100 outline-none bg-sky-500 focus:outline-none justify-center bg-icoBlue text-white hover:bg-sky-400 focus:bg-icoBlue-300 focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white px-10 py-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed">
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCaption;
