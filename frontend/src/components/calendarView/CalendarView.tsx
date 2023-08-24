import React, {useMemo, useContext, memo, Suspense} from "react";
import {momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {PostContext} from "../../context/PostContext";
import {EventComponent} from "../event/Event";
import Spinner from "../reusableComponents/spinner/Spinner";
import {Calendar} from "react-big-calendar";

// const Calendar = React.lazy(() =>
//   new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
//     import("react-big-calendar").then((module) => {
//       console.log("PROMISE RESOLVED");
//       return {default: module.Calendar};
//     })
//   )
// );

const localizer = momentLocalizer(moment);
const changeType = (a: any) => moment(a).toDate();

const CalendarView = function (props: any) {
  const {allEvents, previousEvents} = useContext(PostContext);

  const result = useMemo(() => {
    if (Array.isArray(allEvents)) {
      return allEvents.map((obj: any) => ({
        ...obj,
        // start: changeType(obj.start),
        // end: changeType(obj.end),
      }));
    } else {
      return previousEvents.map((obj: any) => ({
        ...obj,
        // start: changeType(obj.start),
        // end: changeType(obj.end),
      }));
    }
  }, [allEvents, previousEvents]);

  let components = useMemo(() => {
    return {
      //       Event {
      //   title: string,
      // start: Date,
      // end: Date,
      //   allDay?: boolean
      //   resource?: any,
      // }
      event: EventComponent(props),
    };
  }, [props]);

  return (
    // <Suspense fallback={<Spinner />}>
    <Calendar
      localizer={localizer}
      events={result}
      startAccessor="start"
      endAccessor="end"
      // style={{height: "100vh"}}
      defaultView="month"
      views={["month", "week", "day", "agenda"]}
      components={components}
    />
    // {/* </Suspense> */}
  );
};

export default memo(CalendarView);
