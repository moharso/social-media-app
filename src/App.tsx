import React from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/pages/Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Post from "./components/pages/post/Post";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";

function App() {
  return (
    // <div>
    //   <header>
    //     <div>
    //       <img></img>
    //       <span>Julie Nguyen</span>
    //     </div>
    //     <ul>
    //       <li>
    //         <button></button>
    //         <button></button>
    //       </li>
    //     </ul>
    //   </header>
    <BrowserRouter>
      <Routes>
        <Route
          path="schedule"
          element={
            <Layout>
              <div className="flex h-screen relative">
                <Homepage />
              </div>
            </Layout>
          }
        />
        <Route path="schedule/post" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
