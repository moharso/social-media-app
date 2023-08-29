import React, {
  useMemo,
  useContext,
  memo,
  Suspense,
  useEffect,
  useState,
} from "react";
import {momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {PostContext} from "../../context/PostContext";
import {Event} from "../event/Event";
import Spinner from "../reusableComponents/spinner/Spinner";
import {Calendar} from "react-big-calendar";
import axios from "axios";
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
  const BASE_URL = "http://localhost:4001/api/v1";

  const {allEvents, previousEvents, posts, isError} = useContext(PostContext);
  const [isLoading, setIsLoading] = useState(false);
  const [result2, setResult2] = useState<any[]>([]);

  const handleEventSelected = function (event: any) {
    console.log("event", event);
  };

  let components = useMemo(() => {
    return {
      event: Event(props),
    };
  }, [props]);

  useEffect(function () {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/posts`);
        const posts = res.data.data.posts;

        setResult2(posts);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  // if (isError) {
  //   return <p>{isError}</p>;
  // }
  return (
    // <Suspense fallback={<Spinner />}>

    <Calendar
      localizer={localizer}
      events={result2}
      startAccessor={(event) => {
        return new Date(event.startDate);
      }}
      endAccessor={(event) => {
        return new Date(event.endDate);
      }}
      // startAccessor="startDate"
      // endAccessor="endDate"
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
