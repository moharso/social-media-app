import {useEffect, useState} from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/pages/Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import {createContext} from "react";
import {myEventsList} from "../src/components/data/data";

// 1. create context
// const PostContext = createContext([]);

function App() {
  const [allEvents, setAllEvents] = useState<any[]>(function () {
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
    // e.preventDefault();

    // if (!newEvent.post || !newEvent.start || !newEvent.end)
    //   return "Choose required fields";
    // setAllEvents((allEvents: any) => (Array.isArray(allEvents)) ? [...allEvents, item]):null;
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

  // useEffect(
  //   function () {
  //     localStorage.setItem("posted", JSON.stringify(previousEvents));
  //   },
  //   [previousEvents]
  // );

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
                    userSelected={userSelected}
                    onUserSelected={handleSelected}
                  />
                </div>
              </Layout>
            }
          />
          <Route
            path="post"
            element={<Post onClickSubmit={handleAddEvent} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    // </PostContext.Provider>
  );
}

export default App;
