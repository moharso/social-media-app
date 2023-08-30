import {Link} from "react-router-dom";
import "./Event.css";
import moment from "moment";

export const Event =
  ({events, change}: any) =>
  (props: any) => {
    const handleHoursAndMinutes = function () {
      const currentHour = moment(props.event.startDate).toDate().getHours();
      const currentMinute = moment(props.event.startDate).toDate().getMinutes();
      const formattedMinutes =
        currentMinute < 10 ? "0" + currentMinute : currentMinute;
      return `${currentHour}:${formattedMinutes}`;
    };

    // const handleClick = function (event: any) {
    //   console.log(event);
    // };

    return (
      <>
        <Link to={`${props.event._id}`} className="EventBtn">
          <div>
            <div className="EventHeader">
              <span className="EventSocialMedia">
                <img
                  src={`http://localhost:4001/media/${props.event.account.mediaIcon}`}
                  alt="social media icon"
                />
              </span>
              <span className="EventAccount">Account name</span>
            </div>
            <div className="EventText">{props.event.post} </div>
            <div className="EventTime">
              <span>{handleHoursAndMinutes()}</span>
            </div>
            <div
              className="EventVisual"
              style={{
                backgroundImage: `url(http://localhost:4001/post/${props.event.image})`,
              }}
            ></div>
          </div>
        </Link>
        <div className="NewEvent"></div>
      </>
    );
  };
