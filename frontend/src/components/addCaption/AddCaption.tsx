import "./AddCaption.css";
import {useState, useEffect, useRef, useContext} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PostContext} from "../../context/PostContext";
import moment from "moment";
import NavButton from "../reusableComponents/navigationButton/NavButton";
import CrossPost from "../CrossPost/CrossPost";
import "./AddCaption.css";
import SlideoverHeader from "../reusableComponents/slideoverHeader/SlideoverHeader";
import TextArea from "../textArea/TextArea";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import {NavLink} from "react-router-dom";

//  post: {
//     type: String,
//     trim: true,
//     // required: [true, "A post must have a post text"],
//     maxlength: [150, "A post must have less or equal then 150 characters"],
//   },
//   startDate: {
//     type: Date,
//     default: Date.now(),
//     required: [true, "A post must have a date"],
//   },
//   endDate: {type: Date},
//   images: [String],
//   account: [
//     {
//       type: mongoose.Schema.ObjectId,
//       ref: "Account",
//       required: [true, "Post must belong to the account"],
//     },
//   ],
//   user: [
//     {
//       type: mongoose.Schema.ObjectId,
//       ref: "User",
//       required: [true, "Post must belong to the user"],
//     },
//   ],

const AddCaption = ({
  selectedImage,
  account,
  selectedImage2,
  openDialog,
}: any) => {
  const {onClickSubmit, onClickReturn} = useContext(PostContext);
  const [image, setImage] = useState({preview: "", data: ""});

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

  const [newEvent2, setNewEvent2] = useState<any>({
    post: "",
    startDate: "",
    endDate: "",
    image: "",
    user: [],
    account: [],
  });

  const BASE_URL = "http://localhost:4001/api/v1";

  // const handleFileChange = (e: any) => {

  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

  // const [textAreaCount, setTextAreaCount] = useState<any>("");
  // const inputEl = useRef<any>(null);

  const handleCalendarClose = () => {
    const endate = moment(newEvent.startDate).add(1, "hours").toISOString();
    const endate2 = moment(newEvent2.startDate).add(1, "hours").toISOString();
    // const testingDate = moment(endate2).toDate();

    setNewEvent({...newEvent, end: endate});
    setNewEvent2({...newEvent2, endDate: moment(endate2).toDate()});

    console.log(newEvent2.startDate, moment(endate2).toDate());
  };
  const handleTextChange = (post: any) => {
    setNewEvent({...newEvent, post});
    setNewEvent2({...newEvent2, post});
  };

  const filterPassedTime = (date: any) =>
    new Date().getTime() <= date.getTime();

  const submitForm = async (e: any) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("post", newEvent2.post);
      formData.append("startDate", newEvent2.startDate);
      formData.append("endDate", newEvent2.endDate);
      formData.append("image", selectedImage2);
      console.log(newEvent2.endDate);
      //need to add the correct data
      formData.append("account", account._id);
      // formData.append("account", "64ea4c65009431fd9e64d506");

      const response = await axios.post(`${BASE_URL}/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col flex-1 basis-6/12 bg-gray-100">
      <form
        onSubmit={submitForm}
        className="AddCaptionContainer flex-1 pt-10 pr-40 pl-20 pb-15 basis-auto"
      >
        <div className="flex h-full flex-col w-full justify-between">
          <div className="flex flex-col space-y-8 ">
            <div className="flex flex-col">
              <div className="AddCaptionItem">
                <SlideoverHeader
                  text="Post content"
                  icon={
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
                  }
                />

                <div className="flex flex-col relative px-8 pt-8 pb-5 space-y-4 AddCaption">
                  <span>Post text</span>
                  <TextArea setNewEvent={handleTextChange} />
                  {/* <div className="flex items-start w-full h-full flex-col">
                  <textarea
                    id="post"
                    ref={inputEl}
                    maxLength={150}
                    placeholder="Write caption, #hashtags, @mentions, link or add emoji :) ..."
                    value={newEvent.post}
                    onChange={(e) => {
                      setNewEvent({...newEvent, post: e.target.value});
                      setTextAreaCount(e.target.value.length);
                    }}
                  ></textarea>
                  <div className="AddcaptionPostText flex items-center z-1">
                    <p className="text-xs flex-1 text-icoGray-500 ">
                      <span>{150 - textAreaCount}</span> characters left
                    </p>
                  </div>
                </div> */}
                </div>
              </div>
              <div className="AddCaptionItem">
                <SlideoverHeader
                  text="Post planning"
                  icon={
                    <svg
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM112 256h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16z"
                      ></path>
                    </svg>
                  }
                />
                <div className="AddCaption">
                  <span>Date</span>
                  <div id="date" className="DatePicker">
                    {/* <Controller
                      control={control}
                      name="date"
                      rules={{required: true}}
                      render={({field: {onChange, value}}) => ( */}
                    <DatePicker
                      showIcon
                      placeholderText="Select date and time..."
                      // selected={newEvent.start}
                      selected={newEvent2.startDate}
                      // onChange={(start) => {
                      //   setNewEvent({...newEvent, start});
                      // }}
                      onChange={(startDate) => {
                        setNewEvent2({...newEvent2, startDate});
                      }}
                      showTimeSelect
                      minDate={new Date()}
                      filterTime={filterPassedTime}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      onCalendarClose={handleCalendarClose}
                      openToDate={new Date()}
                      timeIntervals={30}
                    />
                    {/* )} */}
                    {/* /> */}
                    {/* {errors.firstName && <Text>This is required.</Text>} */}
                    {/* <ErrorMessage
                      errors={errors}
                      name="date"
                      render={({message}) => <p>{message}</p>}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <CrossPost></CrossPost>
          </div>
          <div className="flex justify-between mt-8 space-x-3 !justify-end">
            <NavLink to="/app">
              <NavButton
                buttonText="Cancel"
                // to="/app"
                variant="outlined"
                type="button"
                // onClick={onClickReturn}
              ></NavButton>
            </NavLink>
            {/* // onClick={() =>
 //   onClickSubmit({
              //     ...newEvent,
              //     data: {image: selectedImage, icon: "", profile: []},
              //   })
              // }
              // onClick={(e: any) => submitForm(e)}
              // buttonText="Schedule a post"
              // to="/app"
              // variant="contained"
              // onClick={(e: any) => submitForm(e)}
              // type="submit" */}
            {/* <NavButton
             
            ></NavButton> */}
            <NavButton
              variant="contained"
              type="submit"
              buttonText="Schedule a post"
              onClick={openDialog}
            ></NavButton>
            {/* <button type="submit"> */}
            {/* onClick={(e) => submitForm(e)} */}

            {/* </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCaption;
