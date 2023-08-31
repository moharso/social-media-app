import "./AddCaption.css";
import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import NavButton from "../reusableComponents/navigationButton/NavButton";
import CrossPost from "../CrossPost/CrossPost";
import "./AddCaption.css";
import SlideoverHeader from "../reusableComponents/slideoverHeader/SlideoverHeader";
import TextArea from "../textArea/TextArea";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const BASE_URL = "http://localhost:4001/api/v1";

type AddCaptionProps = {
  selectedImage: string;
  account: any;
  openDialog: () => void;
  post: any;
  isPostCreationDone: string | null;
  openAlert: () => void;
};

const AddCaption = ({
  selectedImage,
  account,
  openDialog,
  post,
  isPostCreationDone,
  openAlert,
}: AddCaptionProps) => {
  const [newEvent, setNewEvent] = useState<{
    post: string | "";
    startDate: any;
    endDate: any;
    image: string | "";
    account: any[];
  }>(
    isPostCreationDone
      ? {
          post: post?.post,
          startDate: moment(post.startDate).toDate(),
          endDate: post?.endDate,
          image: post?.image,
          // user: [],
          account: post?.account?._id,
        }
      : {
          post: "",
          startDate: "",
          endDate: "",
          image: "",
          // user: [],
          account: [],
        }
  );
  console.log(isPostCreationDone, typeof isPostCreationDone);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleCalendarClose = () => {
    const endate = moment(newEvent.startDate).add(1, "hours").toISOString();
    setNewEvent({...newEvent, endDate: moment(endate).toDate()});
  };

  const handleTextChange = (post: string | "") => {
    setNewEvent({...newEvent, post});
  };

  const filterPassedTime = (date: Date) =>
    new Date().getTime() <= date.getTime();

  const submitForm = async (e: any) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("post", newEvent.post);
      formData.append("startDate", newEvent.startDate);
      formData.append("endDate", newEvent.endDate);
      formData.append("image", selectedImage);
      formData.append("account", account._id);

      localStorage.setItem("postDate", newEvent.startDate);
      localStorage.setItem("post", newEvent.post);

      if (isPostCreationDone) {
        await axios.patch(`${BASE_URL}/posts/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await axios.post(`${BASE_URL}/posts`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    } catch (err) {}
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
                  <TextArea
                    setNewEvent={handleTextChange}
                    post={post}
                    isPostCreationDone={isPostCreationDone}
                  />
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
                    <DatePicker
                      showIcon
                      placeholderText="Select date and time..."
                      selected={newEvent.startDate}
                      onChange={(startDate) => {
                        setNewEvent({...newEvent, startDate});
                      }}
                      showTimeSelect
                      minDate={new Date()}
                      filterTime={filterPassedTime}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      onCalendarClose={handleCalendarClose}
                      openToDate={new Date()}
                      timeIntervals={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <CrossPost></CrossPost>
          </div>
          <div className="flex justify-between mt-8 space-x-3 !justify-end">
            <NavButton
              buttonText="Cancel"
              variant="outlined"
              type="button"
              onClick={() => {
                !isPostCreationDone ? navigate("/app") : navigate(-1);
              }}
            ></NavButton>

            <NavButton
              variant="contained"
              type="submit"
              buttonText="Schedule a post"
              onClick={() => {
                !isPostCreationDone ? openDialog() : openAlert();
              }}
            ></NavButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCaption;
