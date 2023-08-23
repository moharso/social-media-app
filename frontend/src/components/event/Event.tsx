// @ts-ignore
import ImageB from "../assets/blank.jpg";
import {Link} from "react-router-dom";
import "./Event.css";

console.log();

export const EventComponent =
  ({events, change}: any) =>
  (props: any) => {
    const isImage = props?.event?.data?.image;
    const isIcon = props?.event?.data?.icon.length !== 0;

    console.log(props);

    return (
      <>
        <Link
          // data-modal-target="defaultModal"
          // data-modal-toggle="defaultModal"
          // onClick={props.change}
          to={`${props.event.data.id}`}
          className="EventBtn"
        >
          {/* className="EventContent" */}
          {/* //     style={{ */}
          {/* //       color: "white",
        //       height: "100%",
        //       width: "100%",
        //       backgroundImage: isImage
        //         ? `linear-gradient(
        //   to right bottom,
        //   rgb(43, 48, 53, 0.3),
        //   rgb(43, 48, 53, 0.3)
        // ), url(${props.event.data.image})`
        //         : `linear-gradient(
        //   to right bottom,
        //   rgb(43, 48, 53, 0.3),
        //   rgb(43, 48, 53, 0.3)
        // ), url(${ImageB})`,
        //       backgroundSize: "cover",
        //       backgroundPosition: "center",
        //       backgroundRepeat: "no-repeat",
        //       display: "flex",
        //       alignItems: "flex-end",
        //     }}
      > */}
          {/* <div
        // style={{
        //   minWidth: "1.5rem",
        //   minHeight: "1.5rem",
        //   borderRadius: "9999px",
        //   boxShadow: "0 0 0 2px",
        //   backgroundPosition: "center",
        //   backgroundImage: isIcon
        //     ? props?.event?.data?.icon.map((item: any) => {
        //         return `url(${item})`;
        //       })
        //     : null,
        // }}
        >
          Postcard header
        </div> */}
          <div>
            <div className="EventHeader">
              <span className="EventSocialMedia">Social media icon</span>
              <span className="EventAccount">Account name</span>
            </div>
            <div className="EventText">Post summary </div>
            <div className="EventTime">
              <span>13:33</span>
            </div>
            <div className="EventVisual"></div>
          </div>
        </Link>
        <div className="NewEvent">
          {/* redirects to post page with date already inside an input */}
          <button>New post</button>
        </div>
      </>
    );
  };
