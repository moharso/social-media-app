// @ts-ignore
import ImageB from "../assets/blank.jpg";
import {Link, NavLink} from "react-router-dom";
import "./Event.css";

export const Event =
  ({events, change}: any) =>
  (props: any) => {
    // const isImage = props?.event?.data?.image;
    // const isIcon = props?.event?.data?.icon.length !== 0;

    const handleHoursAndMinutes = function () {
      const currentHour = props.event.start.getHours();
      const currentMinute = props.event.start.getMinutes();
      const formattedMinutes =
        currentMinute < 10 ? "0" + currentMinute : currentMinute;
      return `${currentHour}:${formattedMinutes}`;
    };
    const handleClick = function (event: any) {
      console.log(event);
    };

    console.log(props);
    return (
      <>
        <Link to={`${props.event.data.id}`} className="EventBtn">
          <div>
            <div className="EventHeader">
              <span className="EventSocialMedia">Social media icon</span>
              <span className="EventAccount">Account name</span>
            </div>
            <div className="EventText">{props.event.post} </div>
            <div className="EventTime">
              {/* <span>{props.event.start.toLocaleDateString("en-US")}</span> */}
              <span>{handleHoursAndMinutes()}</span>
            </div>
            <div
              className="EventVisual"
              style={{backgroundImage: `url(${props.event.data?.image})`}}
            ></div>
          </div>
        </Link>
        <div className="NewEvent">
          {/* redirects to post page with date already inside an input */}
          <NavLink to="/post" className="EventBtnRedirect">
            New post
          </NavLink>
        </div>
      </>
    );
  };
