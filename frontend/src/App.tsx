import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
// import Layout from "./components/pages/Layout/Layout";
//
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";

import LandingPage from "./components/pages/landingPage/LandingPage";
import Confirmation from "./components/pages/confirmation/Confirmation";
import CalendarView from "./components/calendarView/CalendarView";
import SlideOver from "./components/slideOver/SlideOver";
import {PostProvider} from "./context/PostContext";

function App() {
  return (
    <PostProvider>
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
          <Route path="post" element={<Post />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
