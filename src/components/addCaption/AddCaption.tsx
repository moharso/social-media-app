import "./AddCaption.css";
import {NavLink} from "react-router-dom";
import React, {useMemo, useState, useEffect} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
// @ts-ignore
import ImageF from "../assets/facebook.svg";
import moment from "moment";
import DatePicker, {getDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const myEventsList = [
//   // s
//   {
//     start: moment("2023-08-02T08:00:00").toDate(),
//     end: moment("2023-08-02T10:00:00").toDate(),
//     location: "",
//     // allDay: true,
//     post: "special event2",
//     data: {
//       profile: "Twitter",
//       image: Image,
//     },
//   },
//   {
//     start: moment("2023-08-08T10:00:00").toDate(),
//     end: moment("2023-08-08T12:00:00").toDate(),
//     post: "special event3",
//     location: "Kaunas, Lithuania",
//     data: {
//       profile: "Facebook",
//       image: ImageF,
//     },
//   },
//   {
//     start: moment("2023-08-04T10:00:00").toDate(),
//     end: moment("2023-08-04T11:00:00").toDate(),
//     post: "special event4",
//     location: "",
//     data: {
//       profile: "Instagram",
//       image: Image,
//     },
//   },
//   {
//     start: moment("2023-07-30T10:00:00").toDate(),
//     end: moment("2023-07-30T14:00:00").toDate(),
//     post: "special event6",
//     location: "Vilnius, Lithuania",
//     data: {
//       profile: "LInkedin",
//       image: ImageF,
//     },
//   },
// ];

const AddCaption = ({onClickSubmit, selectedImage}: any) => {
  const [newEvent, setNewEvent] = useState<any>({
    post: "",
    start: "",
    end: "",
    image: "",
  });

  // Jei neveiks reikia enablinti
  // const [allEvents, setAllEvents] = useState(function () {
  //   const storedValue: any = localStorage.getItem("posted");
  //   return JSON.parse(storedValue);
  // });

  // function handleAddEvent(e: any) {
  //   e.preventDefault();

  //   // if (!newEvent.post || !newEvent.start || !newEvent.end)
  //   //   return "Choose required fields";
  //   setAllEvents((allEvents: any[]) => [...myEventsList, newEvent]);
  // }

  // useEffect(
  //   function () {
  //     localStorage.setItem("posted", JSON.stringify(allEvents));
  //   },
  //   [allEvents]
  // );

  return (
    <div className="flex flex-col flex-1">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex-1 pt-10 pr-40 pl-20 pb-15 basis-auto bg-white dark:bg-icoDarkMode-anthracite"
      >
        <div className="flex h-full flex-col w-full justify-between">
          <div className="flex flex-col space-y-8 ">
            <div className="flex flex-col">
              <label
                htmlFor="cityName"
                className="w-full block text-base font-bold mb-3 cursor-pointer w-auto"
              >
                Add a caption
              </label>
              <div className="flex flex-col relative px-8 pt-8 pb-5 space-y-4 AddCaption">
                <div className="flex items-start">
                  <span className="relative inline-flex items-center justify-center bg-white mr-5 w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                    📝
                  </span>
                  <textarea
                    id="cityName"
                    // type="text"
                    placeholder="Say something ..."
                    // className="resize-none text-sm z-1 scrollbar placeholder:text-icoGray-400 placeholder:dark:text-icoDarkMode-wolf font-GMedium bg-transparent p-0 border-0 placeholder:text-sm focus:outline-0 focus:ring-0 peer flex-1 leading-5"
                    // type="text"
                    style={{width: "20%"}}
                    value={newEvent.post}
                    onChange={(e) =>
                      setNewEvent({...newEvent, post: e.target.value})
                    }
                  ></textarea>
                </div>
                <div className="flex items-center z-1">
                  <p className="text-xs font-GMedium flex-1 text-icoGray-500 dark:text-icoDarkMode-wolf">
                    <span className="font-GSemiBold">150</span> characters left
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start">
                <span className="relative inline-flex items-center justify-center bg-white mr-5 w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                  🌎
                </span>
                <input
                  type="text"
                  placeholder="Say something ..."
                  // className="resize-none text-sm z-1 scrollbar placeholder:text-icoGray-400 placeholder:dark:text-icoDarkMode-wolf font-GMedium bg-transparent p-0 border-0 placeholder:text-sm focus:outline-0 focus:ring-0 peer flex-1 leading-5"
                  onChange={(e) =>
                    setNewEvent({...newEvent, post: e.target.value})
                  }
                ></input> */}
              {/* </div> */}
              <h2>Add new event</h2>
              <div>
                <DatePicker
                  placeholderText="Start Date"
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker
                  placeholderText="End Date"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({...newEvent, end})}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8 space-x-3 !justify-end">
            <NavLink
              to="/"
              // className="flex items-center font-Bold leading-none max-w-full transition duration-100 outline-none bg-sky-300 focus:outline-none justify-center bg-icoBlue text-white hover:bg-sky-400 focus:bg-icoBlue-300 focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white px-10 py-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed"
            >
              ◀ Previous: Calendar
            </NavLink>
            <button
              // className="flex items-center font-Bold leading-none max-w-full transition duration-100 outline-none bg-sky-500 focus:outline-none justify-center bg-icoBlue text-white hover:bg-sky-400 focus:bg-icoBlue-300 focus:ring-2 focus:ring-icoBlue-200 focus:ring-offset-2 focus:text-white px-10 py-5 min-h-14 min-w-150 text-sm rounded-md disabled:bg-icoGray-300 dark:disabled:bg-white/5 disabled:text-icoGray-400 dark:disabled:text-icoDarkMode-wolf disabled:cursor-not-allowed"
              onClick={() => onClickSubmit({...newEvent, image: selectedImage})}
            >
              Next ▶
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCaption;
