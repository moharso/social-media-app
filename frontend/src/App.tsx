import React, {useEffect, useState, useCallback} from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
// import Layout from "./components/pages/Layout/Layout";
//
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import {createContext} from "react";
import {myEventsList} from "../src/components/data/data";
import LandingPage from "./components/pages/landingPage/LandingPage";
import Confirmation from "./components/pages/confirmation/Confirmation";
import CalendarView from "./components/calendarView/CalendarView";
import SlideOver from "./components/slideOver/SlideOver";
import {PostProvider} from "./context/PostContext";
// const CalendarView = React.lazy(
//   () => import("./components/calendarView/CalendarView")
// );

// export const PostContext = createContext<any>({});

function App() {
  // const [allEvents, setAllEvents] = useState<any[] | null>(function () {
  //   const storedValue: any = localStorage.getItem("posted");
  //   return JSON.parse(storedValue);
  // });
  // // const [posts, setPosts] = useState([]);

  // const [userSelected, setUserSelected] = useState<any>([]);
  // const [previousEvents, setpreviousEvents] = useState(myEventsList);

  // function handleSelected(e: any, account: any) {
  //   e.preventDefault();
  //   setUserSelected((acc: any) => [...acc, account]);
  // }

  // const handleAddEvent = useCallback(
  //   function handleAddEvent(item: any) {
  //     if (Array.isArray(allEvents)) {
  //       setAllEvents([...allEvents, item]);
  //     } else {
  //       setAllEvents([...previousEvents, item]);
  //     }
  //   },
  //   [allEvents, previousEvents]
  // );

  // function handleReturn() {
  //   setUserSelected([]);
  // }
  // useEffect(
  //   function () {
  //     localStorage.setItem("posted", JSON.stringify(allEvents));
  //   },
  //   [allEvents]
  // );

  // for data from database
  // useEffect(() => {
  //   async function fetchPosts() {
  // try{
  //     const res = await fetch("URL");
  //     const data = await res.json();
  // setPosts(data)}catch(err){alert ("ERROR")};
  //   }
  // }, []);

  return (
    <PostProvider>
      {/* <div> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="app" element={<Homepage />}>
            <Route index element={<Navigate replace to="calendar" />} />
            <Route path="dashboard" element={<p>DASHBOARD</p>} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="calendar/:id" element={<SlideOver />} />
            <Route path="settings" element={<p>SETTINGS</p>} />
            <Route path="accounts" element={<p>ACCOUNTS</p>} />
          </Route>
          {/* <Route
              path="/app"
              element={
                <Layout>
                  <div className="flex h-screen relative">
                    <Homepage />
                  </div>
                </Layout>
              }
            /> */}
          <Route path="post" element={<Post />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </PostProvider>
  );
}

export default App;
