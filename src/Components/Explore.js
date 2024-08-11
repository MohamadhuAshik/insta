import React from "react";
import "../Components/Explore.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { Card } from "react-bootstrap";
import video1 from "./Video/video1.mp4";
import video2 from "./Video/video2.mp4";
import video3 from "./Video/video3.mp4";
import video4 from "./Video/video4.mp4";
   
//Instagram Explore Component

const Explore = () => {
    const [data] = useState([
        {
            userName: "Yogi",
            postImageURL: require("./Images/SivaInsta.jpg"),
            likes: 1234,
            description: "Comment 2",  
        },
        {
            userName: "Yogi",
            postImageURL: require("./Images/YogiInsta.jpg"),
            likes: 1234,
            description: "Comment 2",  
        }, {
            userName: "Yogi",
            postImageURL: require("./Images/Prasanna.jpg"),
            likes: 1234,
            description: "Comment 2",  
        },
        {
            userName: "Yogi",
            postImageURL: require("./Images/Actor.jpg"),
            likes: 1234,
            description: "Comment 2",  
        },
        {
          userName: "Yogi",
          postImageURL: require("./Images/YogiInsta.jpg"),
          likes: 1234,
          description: "Comment 2",  
      },
      {
        userName: "Yogi",
        postImageURL: require("./Images/AshikInsta2.jpg"),
        likes: 1234,
        description: "Comment 2",  
    }
    ]);

   

  return (
    <div className="row">

        <div className="col-sm-3">
        <Navbar />
        </div>

        <div className="col-sm-8 explore">

        <Card className="maincard" style={{width:"10rem"}}> <video className="cardimg" src={video1} controls /></Card>

        {data.map((item, index) => (
            <Card className="maincard" style={{width:"14rem"}} >
            <Card.Img className="cardimg" variant="top" src={item.postImageURL}  />
            
            </Card>
      ))}

      <Card className="maincard" style={{width:"10rem"}}> <video className="cardimg" src={video2} controls /></Card>

      <Card className="maincard" style={{width:"10rem"}}> <video className="cardimg" src={video3} controls /></Card>

      {data.map((item, index) => (
            <Card className="maincard"  style={{width:"14rem"}} >
            <Card.Img className="cardimg" variant="top" src={item.postImageURL}  />
            
            </Card>
      ))}

       <Card className="maincard" style={{width:"10rem"}}> <video className="cardimg" src={video4} controls /></Card>
        </div>
       
    </div>
  );
};

export default Explore;
