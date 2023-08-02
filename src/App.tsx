import React, {useEffect, useState} from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/pages/Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import {createContext} from "react";
import {myEventsList} from "../src/components/data/data";

// 1. create context
export const PostContext = createContext<any>({});
// export const PostContext = createContext();

function App() {
  const [allEvents, setAllEvents] = useState<any[] | null>(function () {
    const storedValue: any = localStorage.getItem("posted");
    return JSON.parse(storedValue);
  });

  const [userSelected, setUserSelected] = useState<any>("");
  const [previousEvents, setpreviousEvents] = useState(myEventsList);
  const [newEvent, setNewEvent] = useState(null);

  function handleSelected(account: any) {
    setUserSelected(account);
  }

  function handleAddEvent(item: any) {
    setNewEvent(item);

    if (Array.isArray(allEvents)) {
      setAllEvents([...allEvents, item]);
    } else {
      setAllEvents([...previousEvents, item]);
    }
  }

  useEffect(
    function () {
      localStorage.setItem("posted", JSON.stringify(allEvents));
    },
    [allEvents]
  );

  return (
    // 2.Provide value to child components
    <PostContext.Provider
      value={{
        allEvents,
        onClickSubmit: handleAddEvent,
        previousEvents: previousEvents,
      }}
    >
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <div className="flex h-screen relative">
                    <Homepage
                      // allEvents={allEvents}
                      // previousEvents={previousEvents}
                      userSelected={userSelected}
                      onUserSelected={handleSelected}
                    />
                  </div>
                </Layout>
              }
            />
            <Route
              path="post"
              element={
                <Post
                  userSelected={userSelected}
                  onClickSubmit={handleAddEvent}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostContext.Provider>
  );
}

export default App;
