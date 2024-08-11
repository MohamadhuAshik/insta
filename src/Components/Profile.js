import React from "react";
import Navbar from "./Navbar";
//import Avatar from "@mui/material/Avatar";
import ppl from "./Images/Ashik.jpg";
import "../Components/Profile.css";
import Story from './Story'

const Profile = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <Navbar />
      </div>
      <div className="col-9">
        <div className="row">
          <div className="col-sm-3">
            <img alt="profileimg" src={ppl} className="rounded-circle profile-img" width="70%"></img>
          </div>
          <div className="col-sm-9">
            <div className="profile">
              <p>
                <b>ppl_call_me_as_hik</b>
              </p>
              <br></br>
              <div className="infos">
               <p>5 posts ||</p> <p> 207 followers ||</p> <p>275 following</p><br></br>
              </div>
              Mohamadhu Ashik<br></br>
              <br></br>
              <div className="bio">
                👉Maduraiyan<br></br>
                👉Jump to earth on 11/07/2001<br></br>
                ✌Mechchon<br></br>
                👸Waiting for my queen<br></br>
                💪The most valuable gift you can receive is an honest friend..
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-sm-12">
            <Story/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
