import "./App.css";
import {PostProvider} from "./context/PostContext";
import Router from "./components/router/Router";

function App() {
  return (
    <PostProvider>
      <Router />
    </PostProvider>
  );
}

export default App;
