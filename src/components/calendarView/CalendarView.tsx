import React, {useMemo, useState} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore
import Image from "../assets/image.jpg";
// @ts-ignore
import ImageF from "../assets/facebook.svg";
// @ts-ignore
import ImageI from "../assets/instagram.svg";
// @ts-ignore
import ImageB from "../assets/blank.jpg";

const localizer = momentLocalizer(moment);
const myUsersList = [
  {
    userName: "runner",
    name: "Neringa",
    facebook: [{username: "poster", image: Image}],
    instagram: [{username: "poster", image: Image}],
    linkedin: [{username: "poster", image: Image}],
    twitter: [{username: "poster", image: Image}],
    tiktok: [
      {
        username: "runner",
        image: Image,
      },
    ],
  },
];
// save them in local storage
const myEventsList = [
  {start: new Date(), end: new Date(), title: "special event"},
  {
    start: new Date(2023, 7 - 1, 31),
    end: new Date(2023, 8 - 1, 2),
    allDay: true,
    title: "special event2",
  },
  {
    start: moment("2023-08-08T10:00:00").toDate(),
    end: moment("2023-08-08T13:00:00").toDate(),
    title: "special event3",
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    title: "special event4",
    data: {
      profile: "Instagram",
      image: Image,
    },
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    title: "special event6",
    data: {
      profile: "Facebook",
      image: ImageF,
    },
  },
];

const components = {
  event: (props: any) => {
    const eventType = props?.event?.data?.profile;
    const isImage = props?.event?.data?.image;
    // we get this data {start: new Date(), end: new Date(), title: "special event"},
    // console.log(props);
    if (isImage) {
      return (
        <div
          style={{
            backgroundColor: "pink",
            color: "white",
            height: "100%",
            backgroundImage: `url(${props.event.data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {props.title}
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "pink",
            color: "white",
            height: "100%",
            backgroundImage: `url(${ImageB})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {props.title}
        </div>
      );
    }
    // switch (eventType) {
    //   case "Instagram":
    //     return (
    //       <div
    //         style={{
    //           backgroundColor: "pink",
    //           color: "white",
    //           height: "100%",
    //           backgroundImage: `url(${props.event.data.image})`,
    //           backgroundSize: "contain",
    //         }}
    //       >
    //         {props.title}
    //       </div>
    //     );
    //   case "Facebook":
    //     return (
    //       <div
    //         style={{
    //           backgroundColor: "blue",
    //           color: "white",
    //           height: "100%",
    //           backgroundImage: `url(${props.event.data.image})`,
    //           backgroundSize: "contain",
    //         }}
    //       >
    //         {props.title}
    //       </div>
    //     );
    //   default:
    //     return null;
    // }
  },
};
const CalendarView = (props: any) => {
  const [newEvent, setNewEvent] = useState<any>({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState<any>(myEventsList);
  const [isDisabled, setIsDisabled] = useState<any>(false);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  // let components = useMemo(
  //   {
  //     // event: MyEvent, // used by each view (Month, Day, Week)
  //     toolbar: MyToolbar,
  //     // agenda: {
  //     //   event: MyAgendaEvent, // with the agenda view use a different component to render events
  //     // },
  //   },
  //   []
  // );
  return (
    <div>
      <h2>Add new event</h2>
      <div>
        <input
          type="text"
          placeholder="Add title"
          style={{width: "20%"}}
          value={newEvent.title}
          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        ></input>
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
        <button onClick={handleAddEvent}>Add event </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{height: "80vh"}}
        defaultView="week"
        views={["month", "week", "day"]}
        components={components}
      />
    </div>
  );
};

export default CalendarView;

// const MyEvent =
//   ({events, change}) =>
//   (props) => {
//     return (
//       <div className="customEventTile" title="This is EventTile">
//         <h5>{props.event.title}</h5>
//         <button onClick={props.change}>Do Something</button>
//       </div>
//     );
//   };
// design custom design or elements for top navigation toolbaar, for today, next, prev or all views

// var MyToolbar = ({handleChange}) => {
//   return class BaseToolBar extends Toolbar {
//     constructor(props) {
//       super(props);
//     }
//     handleDayChange = (event, mconte) => {
//       mconte(event.target.value);
//     };
//     handleNamvigate = (detail, elem) => {
//       detail.navigate(elem);
//     };
//     render() {
//       return (
//         <div className="posr">
//           <div className="rbc-btn-group">
//             <button
//               type="button"
//               className="defaultbtn"
//               onClick={() => this.handleNamvigate(this, "TODAY")}
//             >
//               Today
//             </button>
//             <button
//               type="button"
//               className="nextp-btn"
//               onClick={() => this.handleNamvigate(this, "PREV")}
//             >
//               Prev
//             </button>
//             <button
//               type="button"
//               className="nextp-btn"
//               onClick={() => this.handleNamvigate(this, "NEXT")}
//             >
//               Next
//             </button>
//           </div>
//           <div className="rbc-toolbar-label">{this.props.label}</div>

//           <div className="rbc-btn-group">
//             <select
//               className="form-control"
//               onChange={(e) => this.handleDayChange(e, this.view)}
//               defaultValue={"week"}
//             >
//               <option className="optionbar" value="day">
//                 Day
//               </option>
//               <option className="optionbar" value="week">
//                 Week
//               </option>
//               <option className="optionbar" value="month">
//                 Month
//               </option>
//               <option className="optionbar" value="agenda">
//                 Agenda
//               </option>
//             </select>
//           </div>
//         </div>
//       );
//     }
//   };
// };
