import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Homepage from "./../pages/homepage/Homepage";
import Post from "./../pages/post/Post";
import PageNotFound from "./../pages/pageNotFound/PageNotFound";
import LandingPage from "./../pages/landingPage/LandingPage";
import Confirmation from "./../pages/confirmation/Confirmation";
import CalendarView from "./../calendarView/CalendarView";
import SlideOver from "./../slideOver/SlideOver";
import AccountView from "./../accountView/AccountView";
import Header from "../header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="app" element={<Homepage />}>
          <Route index element={<Navigate replace to="calendar" />} />
          <Route
            path="dashboard"
            element={
              <>
                <Header
                  view={"Dashboard"}
                  text="posts analysis"
                  scheduling={false}
                />
              </>
            }
          />
          <Route
            path="calendar"
            element={
              <>
                <Header
                  view={"Calendar"}
                  text="posts planning"
                  scheduling={true}
                />
                <CalendarView />
              </>
            }
          />
          <Route path="calendar/:id" element={<SlideOver />} />
          {/* <Route path="calendar/post" element={<SlideOver />} /> */}

          <Route
            path="settings"
            element={
              <>
                <Header
                  view={"Settings"}
                  text="passwords resetting"
                  scheduling={false}
                />
              </>
            }
          />
          <Route
            path="accounts"
            element={
              <>
                <Header
                  view={"Accounts"}
                  text="accounts managing"
                  scheduling={false}
                />
                <AccountView />
              </>
            }
          />
        </Route>
        {/* <Route path="/post" element={<Post />} /> */}
        {/* <Route path="confirmation" element={<Confirmation />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
