import React, {useState} from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import "./CalendarView.css";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {start: new Date(), end: new Date(), title: "special event"},
  {
    start: new Date(2023, 7 - 1, 31),
    end: new Date(2023, 8 - 1, 2),
    allDay: true,
    title: "special event2",
  },
  {
    start: new Date(2023, 8 - 1, 1),
    end: new Date(2023, 8 - 1, 1),
    title: "special event3",
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    title: "special event4",
  },
];

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
      />
    </div>
  );
};

export default CalendarView;
