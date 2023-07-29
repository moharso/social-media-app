import React from "react";

import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Layout from "./components/pages/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="flex h-screen relative">
        <Homepage />
      </div>
    </Layout>
  );
}

export default App;
