// @ts-ignore
import ImageB from "../assets/blank.jpg";

export const EventComponent =
  ({events, change}: any) =>
  (props: any) => {
    const isImage = props?.event?.data?.image;
    const isIcon = props?.event?.data?.icon.length !== 0;

    return (
      <div
        style={{
          color: "white",
          height: "100%",
          width: "100%",
          backgroundImage: isImage
            ? `linear-gradient(
      to right bottom,
      rgb(43, 48, 53, 0.3),
      rgb(43, 48, 53, 0.3)
    ), url(${props.event.data.image})`
            : `linear-gradient(
      to right bottom,
      rgb(43, 48, 53, 0.3),
      rgb(43, 48, 53, 0.3)
    ), url(${ImageB})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            minWidth: "1.5rem",
            minHeight: "1.5rem",
            borderRadius: "9999px",
            boxShadow: "0 0 0 2px",
            backgroundPosition: "center",
            backgroundImage: isIcon
              ? props?.event?.data?.icon.map((item: any) => {
                  return `url(${item})`;
                })
              : null,
          }}
        ></div>

        <button
          style={{
            background: "transaprent",
            display: "block",
            width: "100%",
            height: "100%",
            fontWeight: "700",
          }}
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          onClick={props.change}
          className="hover:transition-all hover:scale-y-110 viewBox='0 0 24 24' "
        >
        </button>
      </div>
    );
  };
