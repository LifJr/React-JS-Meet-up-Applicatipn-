import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new-meetups" element={<NewMeetups />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
