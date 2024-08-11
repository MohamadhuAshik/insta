import React, { useState } from "react";
import '../Components/Story.css'
import Avatar from "@mui/material/Avatar";
const Story = () => {
    const [state]=useState([
  
      {
        id:1,
        username: "Ashik",
        imageurl: require("./Images/Ashik.jpg")
      },
      {
        id:2,
        username: "Siva",
        imageurl:require("./Images/SivaInsta.jpg")
         
      },
      {
        id:3,
        username: "Faya",
        imageurl: require("./Images/Siva.jpg")
      },

      {
        id:4,
        username: "Yogi",
        imageurl: require("./Images/Yogi.jpg")
      },
      {
        id:5,
        username: "Prasanna",
        imageurl:require("./Images/press.jpg")
         
      },
      {
        id:6,
        username: "Raj",
        imageurl:require("./Images/Raj.jpg")
         
      },
      {
        id:7,
        username: "Bullet",
        imageurl:require("./Images/Bullet.jpg")
          
      },
      {
        id:8,
        username: "Arun",
        imageurl:require("./Images/AshikInsta.jpg")
      }
    ]);
  return (
    <div>
      <div className="statusbar__container">
        {state.map((item, index) => (
          <div className="status" key={item.id}>
            <Avatar className="statusbar__status" src={item.imageurl} />
            <div className="statusbar__text">{item.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
