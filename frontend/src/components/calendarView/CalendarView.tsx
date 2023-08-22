import React, {useMemo, useContext, memo, Suspense} from "react";
import {momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {PostContext} from "../../App";
import {EventComponent} from "../event/Event";
import Spinner from "../reusableComponents/spinner/Spinner";
const Calendar = React.lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
    import("react-big-calendar").then((module) => {
      return {default: module.Calendar};
    })
  )
);

const localizer = momentLocalizer(moment);
const changeType = (a: any) => moment(a).toDate();

const CalendarView = function CalendarView(props: any) {
  const {allEvents, previousEvents} = useContext(PostContext);

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

  let components = useMemo(() => {
    return {
      event: EventComponent(props),
    };
  }, [props]);

  return (
    // <div>
    <Suspense fallback={<Spinner />}>
      <Calendar
        localizer={localizer}
        events={result}
        // startAccessor="start"
        // endAccessor="end"
        style={{height: "80vh"}}
        defaultView="week"
        views={["month", "week", "day", "agenda"]}
        components={components}
      />
    </Suspense>
    // </div>
  );
};

export default memo(CalendarView);
