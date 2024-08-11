import React, { useState } from "react";
import Posts from "./Posts";


const MainContentPage = () => {
  const [post] = useState([
    {
      userName: "Ashik",
      postImageURL: require("./Images/Actor.jpg"),
      likes: 1234,
      description: "Comment 1",
    },
    {
      userName: "Prasanna",
      postImageURL: require("./Images/Prasanna.jpg"),
      likes: 1234,
      description: "Comment 2",
    },
    {
      userName: "Siva",
      postImageURL: require("./Images/SivaInsta.jpg"),
      likes: "1234",
      description: "Comment 3",
    },
    {
      userName: "Ashik",
      postImageURL: require("./Images/AshikInsta2.jpg"),
      likes: 1234,
      description: "Comment 1",
    },
    {
      userName: "Yogi",
      postImageURL: require("./Images/YogiInsta.jpg"),
      likes: 1234,
      description: "Comment 2",
    },
  ]);
  return (
    <div>
      {post.map((item) => (
        <Posts
          userName={item.userName}
          postImage={item.postImageURL}
          likes={item.likes}
        />
      ))}
    </div>
  );
};

export default MainContentPage;

