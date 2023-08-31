import React, {useState, useRef} from "react";

const PostContent = () => {
  const [textAreaCount, setTextAreaCount] = useState<any>("");
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
  const inputEl = useRef<any>(null);
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="AddCaptionContainerIcon">
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="icons"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fontSize="16"
            >
              <path
                fill="currentColor"
                d="M59.6 54.4c11.1-9.4 30.8-8.7 43.5 3.7l8 8.1 17.5 17.8 17.1-18.3 7.3-7.8c12.5-12 31.7-13.1 43.8-3.4c14.2 12.1 14.8 33.3 2 46.2l0 0-70.7 70.8-71-70.8 0 0C44.3 87.9 44.9 66.6 59.5 54.5l0 0 .1-.1zM28.8 17.6C-7.7 47.9-9.4 102 23.1 134.6l0 0L101.7 213c14.7 15.1 38.3 14.1 52.5 .4l0 0 .3-.3 78.3-78.5 0 0C265.4 102 263.6 48 227.6 17.7l0 0-.3-.3c-29.9-24.3-71-21.9-99.3-1C99.7-4.4 58.2-7 28.8 17.6zM512 24c0-7.2-3.2-14-8.8-18.6s-12.9-6.4-19.9-5l-160 32C312.1 34.7 304 44.6 304 56V161.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48V75.7L464 53.3v76.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48V24zM106.9 309.5l2.7-5.5h68.7l2.7 5.5c8.1 16.3 24.8 26.5 42.9 26.5c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16c18.2 0 34.8-10.3 42.9-26.5zM224 288l-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7H99.8c-12.1 0-23.2 6.8-28.6 17.7L64 288c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64zM192 392a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM473.4 259.1c-6-4.4-14.3-4-19.9 .9l-128 112c-5 4.4-6.8 11.4-4.4 17.7s8.3 10.4 15 10.4h55.7l-38.4 89.7c-2.9 6.9-.7 14.9 5.3 19.2s14.3 4 19.9-.9l128-112c5-4.4 6.8-11.4 4.4-17.7s-8.3-10.4-15-10.4H440.3l38.4-89.7c2.9-6.9 .7-14.9-5.3-19.2z"
              ></path>
            </svg>
          </span>
        </div>
        <label
          htmlFor="post"
          className="label w-full block text-base font-bold mb-3 cursor-pointer w-auto"
        >
          Post content
        </label>
      </div>
      <div className="flex flex-col relative px-8 pt-8 pb-5 space-y-4 AddCaption">
        <div className="flex items-start w-full h-full">
          <textarea
            id="post"
            maxLength={150}
            placeholder="Write caption, #hashtags, @mentions, link or add emoji :) ..."
            value={newEvent.post}
            onChange={(e) => {
              setNewEvent({...newEvent, post: e.target.value});
              setTextAreaCount(e.target.value.length);
            }}
            ref={inputEl}
            className="Textarea"
          ></textarea>
        </div>
        <div className="AddcaptionPostText flex items-center z-1">
          <p className="text-xs flex-1 text-icoGray-500 ">
            <span>{150 - textAreaCount}</span> characters left
          </p>
        </div>
      </div>
    </>
  );
};

export default PostContent;
