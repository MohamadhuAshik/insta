import React from 'react'
import search from "./Images/SearchIcon.png";
import create from "./Images/create.png";
import Reels from "./Images/Reels.png";
import instalogo from "./Images/insta.png";
import home from "./Images/home.svg";
import message from "./Images/message.svg";
import find from "./Images/find.svg";
import react from "./Images/love.svg";
import dp from "./Images/dp6.png";
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div className="row">
    <div className="col-sm-1">
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
          width="25px"
          height="25px"
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
          </label>
        </Link>
       <Link to="/Insta/search"> <label
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
          </label>
        </Link>
      </div>
    </div>
    </div>

  )
}

export default Navbar2