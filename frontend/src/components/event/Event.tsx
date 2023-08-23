// @ts-ignore
import ImageB from "../assets/blank.jpg";
import {Link} from "react-router-dom";
import "./Event.css";

console.log();

export const EventComponent =
  ({events, change}: any) =>
  (props: any) => {
    // const isImage = props?.event?.data?.image;
    // const isIcon = props?.event?.data?.icon.length !== 0;

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
              <span>13:30</span>
            </div>
            <div
              className="EventVisual"
              style={{backgroundImage: `url(${props.event.data?.image})`}}
            ></div>
          </div>
        </Link>
        <div className="NewEvent">
          {/* redirects to post page with date already inside an input */}
          <button>New post</button>
        </div>
      </>
    );
  };
