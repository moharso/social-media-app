import "./AddCaption.css";
import {useState, useEffect, useRef, useContext} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PostContext} from "../../App";
import moment from "moment";
import NavButton from "../../reusableComponents/navButton/NavButton";
import CrossPost from "../CrossPost/CrossPost";

const AddCaption = ({selectedImage}: any) => {
  const {onClickSubmit} = useContext(PostContext);

  const [newEvent, setNewEvent] = useState<any>({
    post: "",
    start: "",
    end: "",
    data: {
      profile: [""],
      image: "",
      icon: [],
    },
  });

  // start: moment("2023-08-02T08:00:00").toDate(),

  const [textAreaCount, setTextAreaCount] = useState<any>("");
  const inputEl = useRef<any>(null);

  const handleCalendarClose = () => {
    const endate = moment(newEvent.start).add(1, "hours").toISOString();

    setNewEvent({...newEvent, end: endate});
  };

  // const handleCalendarOpen = () => console.log("Calendar opened");
  const weekend = (date: any) => new Date() <= date;

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex-1 pt-10 pr-40 pl-20 pb-15 basis-auto bg-white dark:bg-icoDarkMode-anthracite"
      >
        <div className="flex h-full flex-col w-full justify-between">
          <div className="flex flex-col space-y-8 ">
            <div className="flex flex-col">
              <label
                htmlFor="post"
                className="w-full block text-base font-bold mb-3 cursor-pointer w-auto"
              >
                Add a caption
              </label>
              <div className="flex flex-col relative px-8 pt-8 pb-5 space-y-4  AddCaption">
                <div className="flex items-start">
                  <span className="relative inline-flex items-center justify-center bg-white mr-5 w-[46px] h-[46px] rounded-full dark:bg-icoDarkMode-deepBlack">
                    📝
                  </span>
                  <textarea
                    id="post"
                    maxLength={150}
                    placeholder="Say something ..."
                    value={newEvent.post}
                    onChange={(e) => {
                      setNewEvent({ ...newEvent, post: e.target.value });
                      setTextAreaCount(e.target.value.length);
                    }}
                    ref={inputEl}
                    className="w-full resize-none text-sm z-1 scrollbar placeholder:text-icoGray-400 placeholder:dark:text-icoDarkMode-wolf font-GMedium bg-transparent p-0 border-0 placeholder:text-sm focus:outline-0 focus:ring-0 peer flex-1 leading-5"
                  ></textarea>
                </div>

                <div className="AddcaptionPostText flex items-center z-1">
                  <p className="text-xs flex-1 text-icoGray-500 ">
                    <span>{150 - textAreaCount}</span> characters left
                  </p>
                </div>
              </div>

              <h2>Add new event</h2>
              <div
                style={{padding: "16px", background: "#f0f0f0", color: "black"}}
              >
                <DatePicker
                  // selectsStart
                  todayButton="Welcome Back!"
                  showIcon
                  placeholderText="Click to select a date"
                  selected={newEvent.start}
                  onChange={(start) => {
                    setNewEvent({...newEvent, start});
                    // if (start) {
                    //   setIsOpen(false);
                    // }
                  }}
                  // startDate={newEvent.start}

                  showTimeSelect
                  // showTimeInput
                  minDate={new Date()}
                  filterDate={weekend}
                  filterTime={weekend}
                  dateFormat="MMMM d, yyyy h:mmaa"
                  isClearable
                  onCalendarClose={handleCalendarClose}
                  openToDate={new Date()}
                  timeIntervals={15}

                  // onCalendarOpen={handleCalendarOpen}
                  // onInputClick={() => setIsOpen(true)}
                  // onClickOutside={() => setIsOpen(false)}
                  // open={isOpen}
                />

                {/* <DatePicker
                  selectsEnd
                  placeholderText="End Date"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({ ...newEvent, end })}
                  startDate={newEvent.start}
                  minDate={newEvent.start}
                  showTimeSelect
                  filterDate={weekend}
                  filterTime={weekend}
                  dateFormat="MMMM d, yyyy h:mmaa"
                /> */}
              </div>
            </div>
          </div>
          <div>
            <CrossPost></CrossPost>
          </div>
          <div className="flex justify-between mt-8 space-x-3 !justify-end">


            <NavButton buttonText="<-return" to="/dashboard"></NavButton>
            <NavButton

              onClick={() =>
                onClickSubmit({ ...newEvent, data: { image: selectedImage,icon: "", profile: [] } })
              }
              buttonText="Schedule post"
              to="/confirmation"
            ></NavButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCaption;
