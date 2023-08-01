import React, {useMemo} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore
import ImageB from "../assets/blank.jpg";

const localizer = momentLocalizer(moment);

const changeType = (a: any) => moment(a).toDate();

const CalendarView = (props: any) => {
  const result = useMemo(() => {
    if (props?.allEvents !== null) {
      return props.allEvents.map((obj: any) => ({
        ...obj,
        start: changeType(obj.start),
        end: changeType(obj.end),
      }));
    } else {
      return props?.previousEvents.map((obj: any) => ({
        ...obj,
        start: changeType(obj.start),
        end: changeType(obj.end),
      }));
    }
  }, [props.allEvents, props.previousEvents]);

  console.log("THIS IS PROPS.allEvents", props.allEvents);

  let components = {
    event: EventComponent(props), // used by each view (Month, Day, Week)
    // toolbar: MyToolbar(props),
    // agenda: {
    //   event: MyAgendaEvent, // with the agenda view use a different component to render events
    // },
  };

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  //   console.log(allEvents);
  // }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={result}
        startAccessor="start"
        endAccessor="end"
        style={{height: "80vh"}}
        defaultView="week"
        views={["month", "week", "day", "agenda"]}
        components={components}
      />
    </div>
  );
};

export default CalendarView;

const EventComponent =
  ({events, change}: any) =>
  (props: any) => {
    const isImage = props?.event?.data?.image;

    if (isImage) {
      return (
        <div
          style={{
            color: "white",
            height: "100%",
            backgroundImage: `url(${props.event.data.image})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      );
    } else {
      return (
        <div
          style={{
            color: "white",
            height: "100%",
            backgroundImage: `url(${ImageB})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      );
    }

    // return (
    //   <div className="customEventTile" title="This is EventTile">
    //     <h5>{props.event.title}</h5>
    //     <button onClick={props.change}>Review</button>
    //   </div>
    // );
  };
// design custom design or elements for top navigation toolbaar, for today, next, prev or all views

// const MyToolbar = (props) => {
//   return class BaseToolBar extends Toolbar {
//     constructor(props) {
//       super(props);
//     }

//     render() {
//       return (
//         <div className="posr">
//           <div className="rbc-btn-group">
//             <button type="button" className="defaultbtn">
//               Today
//             </button>
//             <button type="button" className="nextp-btn">
//               Prev
//             </button>
//             <button type="button" className="nextp-btn">
//               Next
//             </button>
//           </div>

//           <div className="rbc-btn-group">
//             <select className="form-control" defaultValue={"week"}>
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
