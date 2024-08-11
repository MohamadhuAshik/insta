import React from "react";
import instalogo from "./Images/logoinsta.png";
import home from "./Images/home.svg";
import message from "./Images/message.svg";
import find from "./Images/find.svg";
import react from "./Images/love.svg";
import dp from "./Images/dp6.png";
import "../Components/Navbar.css";
import search from "./Images/SearchIcon.png";
import create from "./Images/create.png";
import Reels from "./Images/Reels.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navv">
      <div className="navbarcontent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "start",
          }}
        >
          <img
            style={{ marginLeft: "1rem" }}
            className="logo"
            src={instalogo}
            alt="logo"
            width="105px"
          />
          <br></br>
          <br></br>
          <Link to="/Insta">
            <label
              style={{ marginLeft: "1rem" }}
              className="home"
              htmlFor="home"
            >
              <img
                className="img"
                alt="navimg"
                src={home}
                width="25px"
                height="25px"
              />
              Home
            </label>
          </Link>
          <Link to="/Insta/search"><label
            style={{ marginLeft: "1rem" }}
            className="home"
            htmlFor="search"
          >
            <img
              className="img"
              alt="navimg"
              src={search}
              width="25px"
              height="25px"
            />
            Search
          </label></Link>
         

          <Link to="/Insta/explore">
            <label
              style={{ marginLeft: "1rem" }}
              className="home"
              htmlFor="explore"
            >
              <img
                className="img"
                alt="navimg"
                src={find}
                width="25px"
                height="25px"
              />
              Explore
            </label>
          </Link>
          <Link to="/insta/Reels">
            
            <label
              style={{ marginLeft: "1rem" }}
              className="home"
              htmlFor="reels"
            >
              <img
                className="img"
                alt="navimg"
                src={Reels}
                width="25px"
                height="25px"
              />
              Reels
            </label>
          </Link>
          <Link to="/insta/message">
            
            <label
              style={{ marginLeft: "1rem" }}
              className="home"
              htmlFor="message"
            >
              <img
                className="img"
                alt="navimg"
                src={message}
                width="25px"
                height="25px"
              />
              Messages
            </label>
          </Link>

          <Link to="/Insta/notification"><label
            style={{ marginLeft: "1rem" }}
            className="home"
            htmlFor="notify"
          >
            <img
              className="img"
              alt="navimg"
              src={react}
              width="25px"
              height="25px"
            />
            Notifications
          </label></Link>
          <Link to="/Insta/create">
            
            <label
              style={{ marginLeft: "1rem" }}
              className="home"
              htmlFor="message"
            >
              <img
                className="img"
                alt="navimg"
                src={create}
                width="25px"
                height="25px"
              />
              Create
            </label>
          </Link>

          <Link to="/Insta/profile">
            
            <label
              style={{ marginLeft: "1rem" }}
              className="home"
              htmlFor="profile"
            >
              <img
                src={dp}
                alt="navimg"
                className="img"
                style={{ maxWidth: "25px", maxHeight: "25px" }}
              />
              Profile
            </label>
          </Link>
          <Link to="/">
            <button
              style={{ marginLeft: "5rem", marginTop: "5rem" }}
              className="btn "
            >
              Log out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
