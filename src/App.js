import React from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Create from "./Components/Create";
import Messages from "./Components/Messages";
import Reels from "./Components/Reels";
import Explore from "./Components/Explore";
import Notification from "./Components/Notification";
import Search from "./Components/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Insta" element={<Home />} /> {/*Main Page*/} {/*Story,MainContentPage,Info,Suggestion */}
      <Route path="signup" element={<SignUp />} />
      <Route path="/Insta/profile" element={<Profile />} />
      <Route path="/Insta/create" element={<Create />} />
      <Route path="/Insta" element={<Home />} />
      <Route path="/insta/message" element={<Messages />} />
      <Route path="/Insta/Reels" element={<Reels />} />
      <Route path="/Insta/explore" element={<Explore />} />
      <Route path="/Insta/notification" element={<Notification />} />
      <Route path="/Insta/search" element={<Search />} />
    </Routes>
  );
}

export default App;
