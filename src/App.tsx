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

    post: "Let's run to the moon...",
    data: {
      profile: "Twitter",
      image: "blob:http://localhost:3002/50f26cb9-9a67-464b-941b-d63ab8fda7f4",
    },
  },
  {
    start: moment("2023-08-08T10:00:00").toDate(),
    end: moment("2023-08-08T12:00:00").toDate(),
    post: "special event3",
    location: "Kaunas, Lithuania",
    data: {
      profile: "Facebook",
      image: "blob:http://localhost:3002/f46ffab2-a89a-4a6c-8b4e-e14f5a57c58c",
    },
  },
  {
    start: moment("2023-08-04T10:00:00").toDate(),
    end: moment("2023-08-04T11:00:00").toDate(),
    post: "special event4",
    location: "",
    data: {
      profile: "Instagram",
      image: "blob:http://localhost:3002/54b6539d-6f79-4b27-b6d9-eb43af0e1aea",
    },
  },
  {
    start: moment("2023-07-30T10:00:00").toDate(),
    end: moment("2023-07-30T14:00:00").toDate(),
    post: "special event6",
    location: "Vilnius, Lithuania",
    data: {
      profile: "LInkedin",
      image: "blob:http://localhost:3002/54b6539d-6f79-4b27-b6d9-eb43af0e1aea",
    },
  },
];

// 1. create context
const PostContext = createContext([]);

function App() {
  const [allEvents, setAllEvents] = useState<any[]>(function () {
    const storedValue: any = localStorage.getItem("posted");
    return JSON.parse(storedValue);
  });

  const [previousEvents, setpreviousEvents] = useState(myEventsList);

  // const [selectedImage, setSelectedImage] = useState<any>(null);

  // function handlePickImage(event: any) {
  //   setSelectedImage(URL.createObjectURL(event.target.files[0]));
  // }

  function handleAddEvent(newEvent: any) {
    // e.preventDefault();

    // if (!newEvent.post || !newEvent.start || !newEvent.end)
    //   return "Choose required fields";
    setAllEvents((allEvents: any) => [...allEvents, newEvent]);
  }
  // useEffect(function(){})
  useEffect(
    function () {
      localStorage.setItem("posted", JSON.stringify(allEvents));
    },
    [allEvents]
  );
  useEffect(
    function () {
      localStorage.setItem("posted", JSON.stringify(previousEvents));
    },
    [previousEvents]
  );

  return (
    // 2.Provide value to child components
    // <PostContext.Provider
    //   value={{
    //     allEvents: allEvents,
    //     onClickSubmit: handleAddEvent,
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
                  <Homepage
                    allEvents={allEvents}
                    previousEvents={previousEvents}
                  />
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
