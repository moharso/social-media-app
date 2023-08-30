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
import AccountView from "./components/accountView/AccountView";
import Router from "./components/router/Router";


function App() {
  return (

    <PostProvider>
      <Router />
      
    </PostProvider>

  );
}

export default App;
