import {useEffect, useState} from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/pages/Layout/Layout";
import {BrowserRouter, Routes, Route, useRoutes} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import {createContext} from "react";
// import ImageF from "./components/assets/facebook.svg";
import moment from "moment";

const myEventsList = [
  // s
  {
    start: moment("2023-08-02T08:00:00").toDate(),
    end: moment("2023-08-02T10:00:00").toDate(),
    location: "",
    // allDay: true,
    post: "special event2",
    data: {
      profile: "Twitter",
      image: Image,
    },
  },
  {
    start: moment("2023-08-08T10:00:00").toDate(),
    end: moment("2023-08-08T12:00:00").toDate(),
    post: "special event3",
    location: "Kaunas, Lithuania",
    data: {
      profile: "Facebook",
      image: "",
    },
  },
  {
    start: moment("2023-08-04T10:00:00").toDate(),
    end: moment("2023-08-04T11:00:00").toDate(),
    post: "special event4",
    location: "",
    data: {
      profile: "Instagram",
      image: "",
    },
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    post: "special event6",
    location: "Vilnius, Lithuania",
    data: {
      profile: "LInkedin",
      image: "",
    },
  },
];

// 1. create context
// const PostContext = createContext([]);

function App() {
  const [allEvents, setAllEvents] = useState(function () {
    const storedValue: any = localStorage.getItem("posted");
    return JSON.parse(storedValue);
  });

  // const [selectedImage, setSelectedImage] = useState<any>(null);

  // function handlePickImage(event: any) {
  //   setSelectedImage(URL.createObjectURL(event.target.files[0]));
  // }

  function handleAddEvent(newEvent: any) {
    // e.preventDefault();

    // if (!newEvent.post || !newEvent.start || !newEvent.end)
    //   return "Choose required fields";
    setAllEvents((allEvents: any[]) => [...allEvents, newEvent]);
  }

  useEffect(
    function () {
      localStorage.setItem("posted", JSON.stringify(allEvents));
    },
    [allEvents]
  );

  return (
    // 2.Provide value to child components
    // <PostContext.Provider
    //   value={{
    //     allEvents: allEvents,
    //   }}
    // >

    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <div className="flex h-screen relative">
                  <Homepage allEvents={allEvents} />
                </div>
              </Layout>
            }
          />
          <Route
            path="post"
            element={
              <Post
                onClickSubmit={handleAddEvent}
                // onPickImage={handlePickImage}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </PostContext.Provider>
  );
}

export default App;
