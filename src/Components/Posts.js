import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import love from "./Images/love.svg";
import mess from "./Images/comment.svg";
import share from "./Images/share.svg";
import save from "./Images/savebutt.png"
import "../Components/Posts.css";

const Posts = ({  userName, postImage, likes }) => {
  const [comment]=useState([
    {
      userName:"Ashik",
      description:"Comment 1"
  },
  {
    userName:"Prasanna",
      description:"Comment 2"
  },
  {
    userName:"Siva",
      description:"Comment 3"
  }

  ])
  return (
    <div className="post__container">
      {/* Header */}
      <div className="post__header">
      <Avatar className="post__image" src="" />
        <div className="post__username">{userName}</div>
      </div>
      <div>
        <img className="img-fluid" alt="icon" src={postImage} width="100%" />
      </div>
      <div>
        <div style={{ marginLeft: "10px",display:"flex",justifyContent:"space-between" }}>
          <div> 
          <img alt="icons" src={love}  className="post_reactimage img-fluid" />
          <img alt="icons" src={mess}  className="post_reactimage img-fluid" />
          <img alt="icons" src={share} className="post_reactimage img-fluid" />
          </div>
          <div>
          <img alt="icons" src={save} className="post_reactimage"/>
          </div>
        </div>
        <div style={{ fontWeight: "bold", marginLeft: "20px  " }}>
          {likes} likes
        </div>
        <div>
          <div className="post_comment">
          {
                  comment.map((item)=>(
                    <div className="post_comment">{item.userName}: {item.description}</div>
                  ))
                  }
          </div>
          <input
            text="text"
            className="post__commentbox"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
