import React, {useMemo, useContext} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore
import ImageB from "../assets/blank.jpg";
import {PostContext} from "../../App";

const localizer = momentLocalizer(moment);

const changeType = (a: any) => moment(a).toDate();

const CalendarView = (props: any) => {
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
    const isIcon = props?.event?.data?.icon.length !== 0;

    return (
      <div
        style={{
          color: "white",
          height: "100%",
          width: "100%",
          backgroundImage: isImage
            ? `linear-gradient(
      to right bottom,
      rgb(43, 48, 53, 0.3),
      rgb(43, 48, 53, 0.3)
    ), url(${props.event.data.image})`
            : `linear-gradient(
      to right bottom,
      rgb(43, 48, 53, 0.3),
      rgb(43, 48, 53, 0.3)
    ), url(${ImageB})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            minWidth: "1.5rem",
            minHeight: "1.5rem",
            borderRadius: "9999px",
            boxShadow: "0 0 0 2px",
            backgroundPosition: "center",
            backgroundImage: isIcon
              ? props?.event?.data?.icon.map((item: any) => {
                  return `url(${item})`;
                })
              : null,
          }}
        ></div>

        <button
          style={{
            background: "transaprent",
            display: "block",
            width: "100%",
            height: "100%",
            fontWeight: "700",
          }}
          onClick={props.change}
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          className="hover:transition-all hover:scale-y-110 viewBox='0 0 24 24' "
        >
          Open Post
        </button>
      </div>
    );
  };
