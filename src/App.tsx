import React, {useEffect, useState, useCallback} from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/pages/Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import {createContext} from "react";
import {myEventsList} from "../src/components/data/data";
import LandingPage from "./components/pages/landingPage/LandingPage";
import Confirmation from "./components/pages/confirmation/Confirmation";

export const PostContext = createContext<any>({});

function App() {
  const [allEvents, setAllEvents] = useState<any[] | null>(function () {
    const storedValue: any = localStorage.getItem("posted");
    return JSON.parse(storedValue);
  });

  const [userSelected, setUserSelected] = useState<any>([]);
  const [previousEvents, setpreviousEvents] = useState(myEventsList);

  function handleSelected(e: any, account: any) {
    e.preventDefault();
    setUserSelected((acc: any) => [...acc, account]);
  }

  const handleAddEvent = useCallback(
    function handleAddEvent(item: any) {
      if (Array.isArray(allEvents)) {
        setAllEvents([...allEvents, item]);
      } else {
        setAllEvents([...previousEvents, item]);
      }
    },
    [allEvents, previousEvents]
  );

  function handleReturn() {
    setUserSelected([]);
  }
  useEffect(
    function () {
      localStorage.setItem("posted", JSON.stringify(allEvents));
    },
    [allEvents]
  );

  return (
    <PostContext.Provider
      value={{
        allEvents,
        onClickSubmit: handleAddEvent,
        previousEvents: previousEvents,
        userSelected: userSelected,
        onUserSelected: handleSelected,
        onClickReturn: handleReturn,
      }}
    >
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <div className="flex h-screen relative">
                    <Homepage />
                  </div>
                </Layout>
              }
            />
            <Route path="post" element={<Post />} />
            <Route
              path="confirmation"
              element={<Confirmation onClickReturn={handleReturn} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostContext.Provider>
  );
}

export default App;
