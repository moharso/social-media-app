import "./AddCaption.css";
import { useState, useEffect, useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavButton from "../../reusableComponents/navButton/NavButton";

const AddCaption = ({ onClickSubmit, selectedImage }: any) => {
  const [newEvent, setNewEvent] = useState<any>({
    post: "",
    start: "",
    end: "",
    data: {
      profile: "",
      image: "",
    },
  });

  const [textAreaCount, setTextAreaCount] = useState<any>("");
  const inputEl = useRef<any>(null);

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
                  {/* <button
                    className="WatchedBoxBtnToggle"
                    onClick={() => setIsOpen1((open) => !open)}
                  >
                    {isOpen1 ? "–" : "+"}
                  </button> */}
                </div>
              </div>

              <h2>Add new event</h2>
              <div>
                <DatePicker
                  selectsStart
                  placeholderText="Start Date"
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({ ...newEvent, start })}
                  startDate={newEvent.start}
                  showTimeSelect
                  filterDate={weekend}
                  filterTime={weekend}
                  dateFormat="MMMM d, yyyy h:mmaa"
                />

                <DatePicker
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
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8 space-x-3 !justify-end">
            <NavButton buttonText="<-return" to="/"></NavButton>
            <NavButton
              onClick={() =>
                onClickSubmit({ ...newEvent, data: { image: selectedImage } })
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
