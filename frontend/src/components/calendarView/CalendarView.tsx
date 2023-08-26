import React, {useMemo, useContext, memo, Suspense} from "react";
import {momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {PostContext} from "../../context/PostContext";
import {Event} from "../event/Event";
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
  const {allEvents, previousEvents, posts, isLoading} = useContext(PostContext);

  const result = useMemo(() => {
    if (Array.isArray(allEvents)) {
      return allEvents.map((obj: any) => ({
        ...obj,
        start: changeType(obj.start),
        end: changeType(obj.end),
      }));
    } else {
      return previousEvents.map((obj: any) => ({
        ...obj,
        start: changeType(obj.start),
        end: changeType(obj.end),
      }));
    }
  }, [allEvents, previousEvents]);

  const handleEventSelected = function (event: any) {
    console.log("event", event);
  };

  let components = useMemo(() => {
    return {
      //       Event {
      //   title: string,
      // start: Date,
      // end: Date,
      //   allDay?: boolean
      //   resource?: any,
      // }
      event: Event(props),
    };
  }, [props]);

  if (isLoading) {
    return <Spinner />;
  }

  // if (isError){
  //   return {<p>}
  // }
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
      onSelectEvent={(event) => handleEventSelected(event)}
    />
    // {/* </Suspense> */}
  );
};

export default memo(CalendarView);
