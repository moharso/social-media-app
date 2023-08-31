import React, {useMemo, memo, useEffect, useState} from "react";
import {momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {Event} from "../event/Event";
import Spinner from "../reusableComponents/spinner/Spinner";
import {Calendar} from "react-big-calendar";
import axios from "axios";

const localizer = momentLocalizer(moment);
const BASE_URL = "http://localhost:4001/api/v1";

const CalendarView = function (props: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any[]>([]);

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

        setResult(posts);
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
    <Calendar
      localizer={localizer}
      events={result}
      startAccessor={(event) => {
        return new Date(event.startDate);
      }}
      endAccessor={(event) => {
        return new Date(event.endDate);
      }}
      defaultView="month"
      views={["month", "week", "day", "agenda"]}
      components={components}
    />
  );
};

export default memo(CalendarView);
