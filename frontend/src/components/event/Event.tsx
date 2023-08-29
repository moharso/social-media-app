// @ts-ignore
import ImageB from "../assets/blank.jpg";
import {Link, NavLink} from "react-router-dom";
import "./Event.css";
import moment from "moment";

export const Event =
  ({events, change}: any) =>
  (props: any) => {
    const changeType = (a: any) => moment(a).toDate();

    // const isImage = props?.event?.data?.image;
    // const isIcon = props?.event?.data?.icon.length !== 0;

    const handleHoursAndMinutes = function () {
      const currentHour = moment(props.event.startDate).toDate().getHours();
      const currentMinute = moment(props.event.startDate).toDate().getMinutes();
      const formattedMinutes =
        currentMinute < 10 ? "0" + currentMinute : currentMinute;
      return `${currentHour}:${formattedMinutes}`;
    };

    const handleClick = function (event: any) {
      console.log(event);
    };

    return (
      <>
        <Link to={`${props.event._id}`} className="EventBtn">
          <div>
            <div className="EventHeader">
              <span className="EventSocialMedia">
                <img
                  src={`http://localhost:4001/media/${props.event.account.mediaIcon}`}
                  alt="social media icon"
                  // className="z-10 relative"
                />
              </span>
              <span className="EventAccount">Account name</span>
            </div>
            <div className="EventText">{props.event.post} </div>
            <div className="EventTime">
              {/* <span>{props.event.start.toLocaleDateString("en-US")}</span> */}
              <span>{handleHoursAndMinutes()}</span>
            </div>
            <div
              className="EventVisual"
              // style={{backgroundImage: `url(${props.event?.image})`}}
              style={{
                backgroundImage: `url(http://localhost:4001/post/${props.event.image})`,
              }}
            >
              {/* <img
                src={`http://localhost:4001/post/${props.event.image}`}
                alt=""
              ></img> */}
            </div>
          </div>
        </Link>
        <div className="NewEvent">
          {/* redirects to post page with date already inside an input */}
          {/* <NavLink to="/post" className="EventBtnRedirect">
            New post
          </NavLink> */}
        </div>
      </>
    );
  };
