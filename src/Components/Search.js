import React from "react";
import Navbar from "./Navbar";
import "../Components/Search.css";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [post] = useState([
    {
      userName: "Arun",
      postImageURL: require("./Images/Actor.jpg"),
     
    },
    {
      userName: "Prasanna",
      postImageURL: require("./Images/Prasanna.jpg"),
     
    },
    {
      userName: "Siva",
      postImageURL: require("./Images/SivaInsta.jpg"),
      
    },
    {
      userName: "Ashik",
      postImageURL: require("./Images/AshikInsta2.jpg"),
     
    },
    {
      userName: "Bullet",
      postImageURL: require("./Images/YogiInsta.jpg"),
      
    },
    {
      userName: "Raj",
      postImageURL: require("./Images/YogiInsta.jpg"),
      
    },
    {
      userName: "Sundar",
      postImageURL: require("./Images/YogiInsta.jpg"),
      
    },
    {
      userName: "Muthuvel",
      postImageURL: require("./Images/YogiInsta.jpg"),
      
    }
  ]);

  //Search Items
  useEffect(() => {
    const filterResults = post.filter((item) =>
      item.userName.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterResults.reverse());
  }, [post, search]);

  return (
    <div className="row">
      <div className="col-sm-3">
        <Navbar />
      </div>
      <div className="col-sm-7 searchcomponent">
        <div style={{width:"18rem"}} className="card">
          <div className="card-header">
            <input
              className="searchbar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search"
              autoFocus
            />
          </div>
        
        <div className="card-body">
          
            {searchResults.map((item) => (
              <div className="serchitem">
                <Avatar width="15px" height="15px" src={item.postImageURL} />
                <p>{item.userName}</p>
              </div>
            ))}
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

