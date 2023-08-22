import moment from "moment";

// @ts-ignore
import Running from "../assets/runner.jpg";
// @ts-ignore
import Art from "../assets/art.jpg";
// @ts-ignore
import Shopper from "../assets/shopper.jpg";
// @ts-ignore
import Image from "../assets/image.jpg";
// @ts-ignore
import Twitter from "../assets/twitter.svg";
// @ts-ignore
import Instagram from "../assets/instagram.svg";
// @ts-ignore
import Facebook from "../assets/facebook.svg";
// @ts-ignore
import Linkedin from "../assets/linkedin.svg";
// @ts-ignore
import Tiktok from "../assets/tiktok.svg";
// @ts-ignore
import Twitter2 from "../assets/Twitter-X-Logo-Vector-01-2.jpeg";
// @ts-ignore
import Linkedin2 from "../assets/linkedin.png";
// @ts-ignore
import Facebook2 from "../assets/Facebook_icon_2013.svg.png";
// @ts-ignore
import Tiktok2 from "../assets/tiktok.png";

export const myEventsList = [
  {
    start: moment("2023-08-02T08:00:00").toDate(),
    end: moment("2023-08-02T09:00:00").toDate(),
    post: "Let's run to the moon...",
    data: {
      profile: ["twitter"],
      image: Running,
      icon: [Twitter],
    },
  },
  {
    start: moment("2023-08-08T10:00:00").toDate(),
    end: moment("2023-08-08T11:00:00").toDate(),
    post: "Ar is relaxing for your body... ",
    data: {
      profile: ["facebook", "linkedin"],
      image: Art,
      icon: [Facebook, Linkedin],
    },
  },
  {
    start: moment("2023-08-04T10:00:00").toDate(),
    end: moment("2023-08-04T11:00:00").toDate(),
    post: "Checkout our new clothing line! ",
    data: {
      profile: ["instagram"],
      image: Shopper,
      icon: [Instagram],
    },
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T11:00:00").toDate(),
    post: "Looking for fashion oriented Sales Manager. If that's you, please contact us via email: sales@fashionstore.com ",
    data: {
      profile: ["linkedin"],
      image: Image,
      icon: [Linkedin],
    },
  },
  {
    start: moment("2023-08-05T17:00:00").toDate(),
    end: moment("2023-07-05T18:00:00").toDate(),
    post: "Looking for fashion oriented Sales Manager. If that's you, please contact us via email: sales@fashionstore.com ",
    data: {
      profile: ["tiktok"],
      image: Image,
      icon: [Tiktok],
    },
  },
];

const myUsersList = [
  {
    userName: "Neringa",
    networks: [
      {username: "Runner", image: Facebook2, name: "facebook"},
      {username: "Ratty", image: Instagram, name: "instagram"},
      {username: "Newbie", image: Linkedin2, name: "linkedin"},
      {username: "John", image: Twitter2, name: "twitter"},
      {username: "Mary", image: Tiktok2, name: "tiktok"},
    ],
  },
];

export default myUsersList;