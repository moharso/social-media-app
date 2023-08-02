import moment from "moment";
// @ts-ignore
import Runner from "../assets/sport.png";
// @ts-ignore
import Animals from "../assets/animal.png";
// @ts-ignore
import Painting from "../assets/painting.png";
// @ts-ignore
import Clothes from "../assets/clothing.png";
// @ts-ignore
import Shopping from "../assets/shopper.jpg";
// @ts-ignore
import Running from "../assets/runner.jpg";
// @ts-ignore
import Art from "../assets/art.jpg";
// @ts-ignore
import Shopper from "../assets/shopper.jpg";
// @ts-ignore
import Image from "../assets/image.jpg";

export const myEventsList = [
  {
    start: moment("2023-08-02T08:00:00").toDate(),
    end: moment("2023-08-02T10:00:00").toDate(),
    post: "Let's run to the moon...",
    data: {
      profile: "Twitter",
      image: Running,
    },
  },
  {
    start: moment("2023-08-08T10:00:00").toDate(),
    end: moment("2023-08-08T12:00:00").toDate(),
    post: "Ar is relaxing for your body... ",
    data: {
      profile: "Facebook",
      image: Art,
    },
  },
  {
    start: moment("2023-08-04T10:00:00").toDate(),
    end: moment("2023-08-04T11:00:00").toDate(),
    post: "Checkout our new clothing line! ",
    data: {
      profile: "Instagram",
      image: Shopper,
    },
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    post: "Looking for fashion oriented Sales Manager. If that's you, please contact us via email: sales@fashionstore.com ",
    data: {
      profile: "LInkedin",
      image: Image,
    },
  },
  {
    start: moment("2023-08-05T17:00:00").toDate(),
    end: moment("2023-07-08T19:00:00").toDate(),
    post: "Looking for fashion oriented Sales Manager. If that's you, please contact us via email: sales@fashionstore.com ",
    data: {
      profile: "Tiktok",
      image: Image,
    },
  },
];

const myUsersList = [
  {
    userName: "Neringa",
    networks: [
      {username: "Runner", image: Runner, name: "facebook"},
      {username: "Ratty", image: Animals, name: "intagram"},
      {username: "Newbie", image: Painting, name: "linkedin"},
      {username: "John", image: Clothes, name: "twitter"},
      {username: "Mary", image: Shopping, name: "tiktok"},
    ],
  },
];

export default myUsersList;
