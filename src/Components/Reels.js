import React from "react";
import video from "./Video/video.mp4";
import video1 from "./Video/video1.mp4";
import video2 from "./Video/video2.mp4";
import video3 from "./Video/video3.mp4";
import video4 from "./Video/video4.mp4";
import video5 from "./Video/video5.mp4";
import Navbar from "./Navbar";
import love from "./Images/love.svg";
import mess from "./Images/comment.svg";
import share from "./Images/share.svg";
import "../Components/Reels.css";

const Reels = () => {
  return (
    <div className="reels">
      <div className="row">
        <div className="col-sm-3">
          <Navbar />
        </div>

        <div className="col-sm-7 video">
            <div className="reelsec">
          <video
            className="container vplayer"
            src={video}
           
            controls
          />
          <div className="commends">
            <img alt="icons" src={love} className="post_reactimage img-fluid" />
            <img alt="icons" src={mess} className="post_reactimage img-fluid" />
            <img
              alt="icons"
              src={share}
              className="post_reactimage img-fluid"
            />
            </div>
          </div>
          <div className="reelsec"> 
          <video
            className="container vplayer "
            src={video1}
           
            controls
          />
          <div className="commends">
            <img alt="icons" src={love} className="post_reactimage img-fluid" />
            <img alt="icons" src={mess} className="post_reactimage img-fluid" />
            <img
              alt="icons"
              src={share}
              className="post_reactimage img-fluid"
            />

          </div>
          </div>

          <div className="reelsec">
          <video
            className="container vplayer"
            src={video2}
           
            controls
          />
          <div className="commends">
            <img alt="icons" src={love} className="post_reactimage img-fluid" />
            <img alt="icons" src={mess} className="post_reactimage img-fluid" />
            <img
              alt="icons"
              src={share}
              className="post_reactimage img-fluid"
            />
            </div>
          </div>

          <div className="reelsec">
          <video
            className="container vplayer"
            src={video3}
           
            controls
          />
          <div className="commends">
            <img alt="icons" src={love} className="post_reactimage img-fluid" />
            <img alt="icons" src={mess} className="post_reactimage img-fluid" />
            <img
              alt="icons"
              src={share}
              className="post_reactimage img-fluid"
            />
            </div>
          </div>

          <div className="reelsec">
          <video
            className="container vplayer"
            src={video4}
           
            controls
          />
          <div className="commends">
            <img alt="icons" src={love} className="post_reactimage img-fluid" />
            <img alt="icons" src={mess} className="post_reactimage img-fluid" />
            <img
              alt="icons"
              src={share}
              className="post_reactimage img-fluid"
            />
            </div>
          </div>

          <div className="reelsec">
          <video
            className="container vplayer"
            src={video5}
           
            controls
          />
          <div className="commends">
            <img alt="icons" src={love} className="post_reactimage img-fluid" />
            <img alt="icons" src={mess} className="post_reactimage img-fluid" />
            <img
              alt="icons"
              src={share}
              className="post_reactimage img-fluid"
            />
            </div>
          </div>


        </div>

        
         
        
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default Reels;
