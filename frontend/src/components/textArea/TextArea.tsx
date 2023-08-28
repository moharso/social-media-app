import React from "react";
import {useState, useEffect, useRef, useContext} from "react";
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";

interface IFormValues {
  post: string;
}

const TextArea = ({setNewEvent, title}: any) => {
  const {register} = useForm<IFormValues>();
  const inputEl = useRef<any>(null);
  const [textAreaCount, setTextAreaCount] = useState<any>("");
  const [textAreaContent, setTextAreaContent] = useState<any>("");
  // const [newEvent, setNewEvent] = useState<any>({
  //   post: "",
  //   start: "",
  //   end: "",
  //   data: {
  //     profile: [""],
  //     image: "",
  //     icon: [],
  //   },
  // });

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <div className="flex items-start w-full h-full flex-col">
      <textarea
        id="post"
        maxLength={150}
        {...register("post", {
          required: true,
          maxLength: {
            value: 150,
            message: "The maximum post length is 150 characters",
          },
        })}
        ref={inputEl}
        placeholder="Write caption, #hashtags, @mentions, link or add emoji :) ..."
        value={textAreaContent}
        onChange={(e) => {
          setNewEvent(e.target.value);
          setTextAreaCount(e.target.value.length);
          setTextAreaContent(e.target.value);
        }}
      ></textarea>
      <div className="AddcaptionPostText flex items-center z-1">
        <p className="text-xs flex-1 text-icoGray-500 ">
          <span>{150 - textAreaCount}</span> characters left
        </p>
      </div>
    </div>
  );
};

export default TextArea;
