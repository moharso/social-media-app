import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";

import {NavLink} from "react-router-dom";
import React, {useMemo, useState, useEffect} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
// @ts-ignore

import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const myEventsList = [
  // s
  {
    start: moment("2023-08-02T08:00:00").toDate(),
    end: moment("2023-08-02T10:00:00").toDate(),
    location: "",
    // allDay: true,
    post: "special event2",
    data: {
      profile: "Twitter",
      image: Image,
    },
  },
  {
    start: moment("2023-08-08T10:00:00").toDate(),
    end: moment("2023-08-08T12:00:00").toDate(),
    post: "special event3",
    location: "Kaunas, Lithuania",
    data: {
      profile: "Facebook",
      image: "",
    },
  },
  {
    start: moment("2023-07-03T21:00:00.000Z").toDate(),
    end: moment("2023-07-03T21:00:00.000Z").toDate(),
    post: "special event4",
    location: "",
    data: {
      profile: "Instagram",
      image: Image,
    },
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    post: "special event6",
    location: "Vilnius, Lithuania",
    data: {
      profile: "LInkedin",
      image: "",
    },
  },
];

const Post = ({onClickSubmit}: any) => {
  // const [newEvent, setNewEvent] = useState<any>({
  //   post: "",
  //   start: "",
  //   end: "",
  //   location: "",
  // });

  //   function () {
  //   const storedValue: any = localStorage.getItem("posting");
  //   return JSON.parse(storedValue);
  // });

  // function handleAddEvent(item: any) {
  //   if (!newEvent.post || !newEvent.start || !newEvent.end)
  //     return "Choose required fields";
  //   setNewEvent(item);
  //   setAllEvents([...allEvents, newEvent]);
  //   console.log(allEvents);
  // }

  return (
    <div className="flex w-full h-full">
      <UploadPhoto />
      <AddCaption
        onClickSubmit={onClickSubmit}
        // onAddPost={handleAddEvent}
        // newEvent={newEvent}
        // onAddStart={handleDateStart}
        // onAddEnd={handleDateEnd}
        // onSubmit={handleAddEventSubmit}
      />
    </div>
  );
};

export default Post;
